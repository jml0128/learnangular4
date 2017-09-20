import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, goodsDetails, goodsInfo } from '../service/data.service';;
import {HttpClient} from '@angular/common/http';
import * as jquery from 'jquery';

@Component({
  selector: 'app-goods-property',
  templateUrl: './goods-property.component.html',
  styleUrls: ['./goods-property.component.css']
})
export class GoodsPropertyComponent implements OnInit {
  private goodsData : any;
  
  private goodsId : number;
  
  private goodsName : string;
  
  private goodsPrice : number = 0;
  
  private goodsProperties : goodsProperty[];
  
  private goodsPropertyName : any = [];
  
  private goodsPropertyValue : any = [];
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService,
	private http: HttpClient
	) { }

  ngOnInit() {
	this.goodsId = this.routeInfo.snapshot.params["id"];
	this.goodsProperties = [];
	this.http.get("http://localhost:3000/getGoodsProperty/" + this.goodsId).subscribe(
	data => {
	  this.goodsData = data;
	  
	  //筛选出属性中相同的属性名称
	for(let i in this.goodsData){
		this.goodsName = this.goodsData[i].goods_name;
		if(this.goodsPrice == 0){
			this.goodsPrice = this.goodsData[i].goods_price;
		}
		if(this.goodsPropertyName.indexOf(this.goodsData[i].property_name) == -1){
			this.goodsPropertyName.push(this.goodsData[i].property_name);
		}
	}
	  
	  //根据相同的属性名称筛选出属性值
	for(let x in this.goodsPropertyName){
		this.goodsPropertyValue = [];
		for(let i in this.goodsData){
			if(this.goodsPropertyName[x] == this.goodsData[i].property_name){
				this.goodsPropertyValue.push(this.goodsData[i].property_value);
			}
		}
		this.goodsProperties.push(new goodsProperty(this.goodsPropertyName[x],this.goodsPropertyValue));
	}
	},
	err => {
	});
  }
  
  chooseProperty(preperty,e){
	  for(let i in this.goodsData){
		if(this.goodsData[i].property_value == preperty){
			if(this.goodsData[i].price != 0){
				this.goodsPrice = this.goodsData[i].price;
			}
		}
	  }
	  setTimeout(() => {
		$(".goods-property").removeClass("active")
		e.target.className = "goods-property active"
	  },0)
  }
}

export class goodsProperty{
	constructor(
	  public  name:string,
	  public  property:any
	){}
}
