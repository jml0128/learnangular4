import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, goodsDetails, goodsInfo } from '../service/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  private goodsDetails : goodsDetails[];
  
  private goodsData : any;
  
  private goodsId : number;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService,
	private http: HttpClient
	) {}

  ngOnInit() {
	this.goodsId = this.routeInfo.snapshot.params["id"];
	console.log(this.goodsId);
	
	this.http.get("http://localhost:3000/getGoodsInfo/" + this.goodsId).subscribe(
	data => {
	  this.goodsData = data;
	  console.log(this.goodsData);
	},
	err => {
	});
	
	this.goodsDetails = this.DataService.getGoodsDetails(this.goodsId);
	
	this.goodsData = this.DataService.getGoodsData(this.goodsId);
  }
  
  changeStatus(goodsStatus){
	 goodsStatus = (goodsStatus == 1 ? 0 : 1);
	 this.goodsDetails[0].status = goodsStatus;
  }
  chooseProperty(id){
	  this.router.navigate(['/goods-property/'+id]);
  }
}
