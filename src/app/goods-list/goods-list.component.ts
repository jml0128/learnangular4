import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';
import { DataService, goodsInfo, category } from '../service/data.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {

   private categoryId : number;
   private categoryName : string;
   private flag : number;
   private goods : goodsInfo[];
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService
  ) {}
  
  ngOnInit() {
    this.routeInfo.params.subscribe((params:Params) => this.categoryId = params["id"]);
    this.routeInfo.params.subscribe((params:Params) => this.categoryName = this.DataService.chooseCategory(this.categoryId).name);
    this.routeInfo.params.subscribe((params:Params) => this.goods = this.DataService.getGoods(this.categoryId));
	console.log(this.goods);
  }

}
