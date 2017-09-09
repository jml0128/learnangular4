import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, goodsDetails, goodsInfo } from '../service/data.service';

@Component({
  selector: 'app-goods-details',
  templateUrl: './goods-details.component.html',
  styleUrls: ['./goods-details.component.css']
})
export class GoodsDetailsComponent implements OnInit {
  private goodsDetails : goodsDetails[];
  
  private goodsData : goodsInfo[];
  
  private goodsId : number;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService
	) {}

  ngOnInit() {
	this.goodsId = this.routeInfo.snapshot.params["id"];
	
	this.goodsDetails = this.DataService.getGoodsDetails(this.goodsId);
	
	this.goodsData = this.DataService.getGoodsData(this.goodsId);
	console.log(this.goodsDetails);
	console.log(this.goodsData);
  }
  
  changeStatus(goodsStatus){
	 goodsStatus = (goodsStatus == 1 ? 0 : 1);
	 this.goodsDetails[0].status = goodsStatus;
	 console.log(this.goodsDetails[0].status);
  }
}
