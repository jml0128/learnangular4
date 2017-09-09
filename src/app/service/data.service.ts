import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
	private flag: string;
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
	
	private goods:  goodsInfo[] = [
	  new goodsInfo(1,1,'商品1','商品1的描述',298),
	  new goodsInfo(1,1,'商品2','商品2的描述',176),
	  new goodsInfo(1,2,'商品3','商品3的描述',123),
	  new goodsInfo(1,2,'商品4','商品4的描述',142),
	  new goodsInfo(1,2,'商品5','商品5的描述',211),
	  new goodsInfo(1,3,'商品6','商品6的描述',33),
	  new goodsInfo(1,4,'商品7','商品7的描述',1123),
	  new goodsInfo(1,4,'商品8','商品8的描述',322)
	];
  getCategories(){
	  return this.categories
  }
  chooseCategory(url:number): category{
	  return this.categories.find((category) => category.url == url);
  }
  getFooterNav(){
	  return this.footerNavs;
  }
  chooseFooterNav(url:string): string{
	  for(var i in this.footerNavs){
		  if(this.footerNavs[i].url == url){
			 this.flag = i;
		  }
	  }
	  return this.flag;
  }
  getGoods(id:number): goodsInfo[]{
		return this.goods.filter((goodsInfo: goodsInfo) => goodsInfo.categoryId == id);
	  
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

export class goodsInfo{
	constructor(
	  public  id:number,
	  public  categoryId:number,
	  public  name:string,
	  public  decs:string,
	  public  price:number
	){}
}