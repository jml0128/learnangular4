import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  //声明一个装载从接口获取的数据的变量
  private categoryJson: any;
  //声明分类
  private Products : Array<Product>;
  //声明一个分类id字段
  private categoryId : number;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private http: HttpClient
  ){}
  
  ngOnInit() {
  
  
    this.Products = [
	  new Product(1,"推荐",1,0),
	  new Product(2,"居家",0,1),
	  new Product(3,"玩家",0,2),
	  new Product(4,"吃货",0,3),
	  new Product(5,"情趣",0,4),
	  new Product(6,"穿搭",0,5),
	  new Product(7,"玩具",0,6),
	  new Product(8,"婴童",0,7),
	];
	
	this.categoryId = this.routeInfo.snapshot.params["id"]
  }
  
  toGoodsCategory(id,url){
    if(url == 0){
	  this.router.navigate(['./']);
	}else{
	  this.router.navigate(['/category',url]);
	}
	for(var i in this.Products){
	  this.Products[i].status = 0;
	}
	this.Products[id-1].status = 1;
  }
  
}

  export class Product{
    constructor(
	  public  id:number,
	  public  name:string,
	  public  status:number,
	  public  url:number
	){}
  }
  