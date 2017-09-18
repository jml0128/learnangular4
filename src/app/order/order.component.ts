import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, orderInfo } from '../service/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  private orderStatus : number;
  
  private orderList : any;
  
  constructor(
	private DataService: DataService,
	private routeInfo: ActivatedRoute,
	private router: Router,
	) { }

  ngOnInit() {
	  this.orderList = this.DataService.getOrderInfos();
	  setInterval(() => {
		this.orderList = this.DataService.getOrderInfos();
	    this.orderStatus = this.routeInfo.snapshot.params["id"];
	    this.orderList = this.orderList.filter((orderInfo) => orderInfo.status == this.orderStatus);
	  },0)
	  
	  
  }
  chooseOrderStatus(e){
	  this.router.navigate(['./order',e]);
	  setTimeout(() => {
		  this.orderStatus = this.routeInfo.snapshot.params["id"];
	  },0);
  }
  
  backUser(){
    this.router.navigate(['me']);
  }
}
