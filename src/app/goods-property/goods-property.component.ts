import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, goodsDetails, goodsInfo } from '../service/data.service';

@Component({
  selector: 'app-goods-property',
  templateUrl: './goods-property.component.html',
  styleUrls: ['./goods-property.component.css']
})
export class GoodsPropertyComponent implements OnInit {
  private goodsData : goodsInfo[];
  
  private goodsId : number;
  
  private chooseProperty1 : number;
  
  private chooseProperty2 : number;
  
  private goodsProperty1 : any;
  
  private goodsProperty2 : any;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService
	) { }

  ngOnInit() {
	this.goodsId = this.routeInfo.snapshot.params["id"];
	
	this.goodsData = this.DataService.getGoodsData(this.goodsId);
	
	this.goodsProperty1 = this.goodsData[0].property1;
	
	this.goodsProperty2 = this.goodsData[0].property2;
  }

}
