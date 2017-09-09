import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

  constructor() { }
    private categories:  category[] = [
	  new category(1,"推荐",0,0),
	  new category(2,"居家",0,1),
	  new category(3,"玩家",0,2),
	  new category(4,"吃货",0,3),
	  new category(5,"情趣",0,4),
	  new category(6,"穿搭",0,5),
	  new category(7,"玩具",0,6),
	  new category(8,"婴童",0,7),
	];
	
	private footerNavs:  footerNav[] = [
	  new footerNav(1,'首页',0,"index"),
	  new footerNav(2,'分类',0,"category-list"),
	  new footerNav(3,'购物车',0,"buycar"),
	  new footerNav(4,'我',0,"me")
	];
	
  getCategories(){
	  return this.categories
  }
  chooseCategory(id:number): category{
	  return this.categories.find((category) => category.id == id);
  }
  getFooterNav(){
	  return this.footerNavs;
  }
  chooseFooterNav(url:string): footerNav[]{
	  return this.footerNavs.filter((footerNav) => footerNav.url == url);
  }
}
export class category{
    constructor(
	  public  id:number,
	  public  name:string,
	  public  status:number,
	  public  url:number
	){}
}
  
export class footerNav{
	constructor(
	  public  id:number,
	  public  name:string,
	  public  status:number,
	  public  url:string
	){}
}