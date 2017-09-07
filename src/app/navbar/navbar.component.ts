import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private Products : Array<Product>;
  
  constructor() {}

  ngOnInit() {
    this.Products = [
	  new Product(1,"推荐",1),
	  new Product(2,"居家",0),
	  new Product(3,"玩家",0),
	  new Product(4,"吃货",0),
	  new Product(5,"情趣",0),
	  new Product(6,"穿搭",0),
	  new Product(7,"玩具",0),
	  new Product(8,"婴童",0),
	];
  }

}
  export class Product{
    constructor(
	  public  id:number,
	  public  name:string,
	  public  status:number
	){}
  }