import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { DataService, category } from '../service/data.service';

@Component({
  selector: 'app-category-nav',
  templateUrl: './category-nav.component.html',
  styleUrls: ['./category-nav.component.css']
})
export class CategoryNavComponent implements OnInit {

   private categories : category[];
  
  private categoryId : number;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private http: HttpClient,
	private DataService: DataService
  ){}
  
  ngOnInit() {
	
	this.categoryId = this.routeInfo.snapshot.params["id"];
	
    this.categories = this.DataService.getCategories();
	if(this.categoryId && this.categoryId < this.categories.length){
	  this.categories[this.categoryId].status = 1;
    }else{
	  for(var i in this.categories){
		this.categories[i].status = 0;
	  }
	  this.categories[0].status = 1;
    }
	
  }
  
  toGoodsCategory(id,url){
	for(var i in this.categories){
	  this.categories[i].status = 0;
	}
	this.categories[id-1].status = 1;
    if(url == 0){
	  this.router.navigate(['./']);
	}else{
	  this.router.navigate(['/category',url]);
	}
  }

}
