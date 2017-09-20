import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { DataService, goodsInfo, category } from '../service/data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

   private categoryId : number;
   private categoryName : string;
   private flag : number = -2;
   private goods : any;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService,
	private http: HttpClient
  ) {}
  
  ngOnInit() {
    this.routeInfo.params.subscribe((params:Params) => this.categoryId = params["id"]);
    this.routeInfo.params.subscribe((params:Params) => {
		if(this.DataService.chooseCategory(this.categoryId)){
			this.categoryName = this.DataService.chooseCategory(this.categoryId).name
		}else{
			this.router.navigate(['/index']);
		}
	});
    this.routeInfo.params.subscribe((params:Params) => {
		if(this.DataService.chooseCategory(this.categoryId)){
			this.http.get("http://localhost:3000/getGoods/" + this.categoryId).subscribe(
			data => {
			  this.goods = data;
			  this.flag = this.goods.length;
			},
			err => {
			  this.flag = -1;
			});
		}
	});
  }
  chooseGoods(id){
	this.router.navigate(['/goods/'+id]);
  }
}
