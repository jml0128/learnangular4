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
	
	private userMenus:  userMenu[] = [
	  new userMenu(1,'我的订单',"img/1.png"),
	  new userMenu(2,'充值积分',"img/2.png"),
	  new userMenu(3,'充值金豆',"img/3.png"),
	  new userMenu(4,'收货地址',"img/4.png"),
	  new userMenu(5,'消费记录',"img/5.png"),
	  new userMenu(6,'我的兑换码',"img/6.png"),
	  new userMenu(7,'账户安全',"img/7.png"),
	  new userMenu(8,'联系客服',"img/7.png"),
	  new userMenu(8,'退出登录',"img/8.png")
	];
	
	private buyCars:  buyCar[] = [
	  new buyCar(11,'我是商品1',298,"属性1",1,0),
	  new buyCar(12,'我是商品2',176,"属性2",1,0),
	  new buyCar(13,'我是商品3',123,"属性3",1,0),
	  new buyCar(14,'我是商品4',142,"属性4",2,0),
	  new buyCar(15,'我是商品5',211,"属性5",3,0)
	];
	
	private goods:  goodsInfo[] = [
	  new goodsInfo(11,1,'商品1','商品1的描述',298,new goodsProperty('颜色',['白色1','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(12,1,'商品2','商品2的描述',176,new goodsProperty('颜色',['白色2','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(13,2,'商品3','商品3的描述',123,new goodsProperty('颜色',['白色3','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(14,2,'商品4','商品4的描述',142,new goodsProperty('颜色',['白色4','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(15,2,'商品5','商品5的描述',211,new goodsProperty('颜色',['白色5','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(16,3,'商品6','商品6的描述',33,new goodsProperty('颜色',['白色6','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(17,4,'商品7','商品7的描述',1123,new goodsProperty('颜色',['白色7','黑色']),new goodsProperty('大小',['大','小'])),
	  new goodsInfo(18,4,'商品8','商品8的描述',322,new goodsProperty('颜色',['白色8','黑色']),new goodsProperty('大小',['大','小']))
	];
	
	private goodsData:  goodsDetails[] = [
	  new goodsDetails(11,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(12,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(13,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(14,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(15,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(16,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(17,'详细介绍详细介绍详细介绍',0),
	  new goodsDetails(18,'详细介绍详细介绍详细介绍',0)
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
  
  getBuyCars(){
	return this.buyCars;
  }
  
  getUserMenus(){
	return this.userMenus;
  }
  
  getGoodsInfo(id:number): buyCar{
	return this.buyCars.find((buyCar: buyCar) => buyCar.id == id);
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
  
  getGoodsData(id:number): goodsInfo[]{
	return this.goods.filter((goodsInfo: goodsInfo) => goodsInfo.id == id);
  }
  
  getGoodsDetails(id:number): goodsDetails[]{
	return this.goodsData.filter((goodsDetails: goodsDetails) => goodsDetails.id == id);
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
	  public  price:number,
	  public  property1:any,
	  public  property2:any
	){}
}

export class buyCar{
	constructor(
	  public  id:number,
	  public  name:string,
	  public  price:number,
	  public  property:any,
	  public  num:number,
	  public  status:number
	){}
}

export class goodsDetails{
	constructor(
	  public  id:number,
	  public  details:string,
	  public  status:number,
	){}
}

export class goodsProperty{
	constructor(
	  public  name:string,
	  public  property:any
	){}
}

export class userMenu{
	constructor(
	  public id:number,
	  public  name:string,
	  public  icon:string
	){}
}
