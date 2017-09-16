import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
  private orderStatus : number;
  
  constructor(
	private DataService: DataService,
	private routeInfo: ActivatedRoute,
	private router: Router,
	) { }

  ngOnInit() {
	  this.orderStatus = this.routeInfo.snapshot.params["id"];
	  console.log(this.orderStatus);
  }
  chooseOrderStatus(e){
	  this.router.navigate(['./order',e]);
	  setTimeout(() => {
		  this.orderStatus = this.routeInfo.snapshot.params["id"];
	  },0);
  }
}
