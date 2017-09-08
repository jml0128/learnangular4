import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private footerNavs: Array<footerNav>;
  private name : string;
  ngOnInit() {
	this.name = location.pathname.slice(1);
    this.footerNavs = [
	  new footerNav(1,'首页',0,"index"),
	  new footerNav(2,'分类',0,"category-list"),
	  new footerNav(3,'购物车',0,"buycar"),
	  new footerNav(4,'我',0,"me")
	];
	for(var i in this.footerNavs){
	  if(this.footerNavs[i].url == this.name){
		  this.footerNavs[i].status = 1;
	  };
	}
  }
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router
  ){}
  
  chooseFooter(id,url){
    if(url == "index"){
	  this.router.navigate(['./']);
	}else{
	  this.router.navigate([url]);
	}
	for(var i in this.footerNavs){
	  this.footerNavs[i].status = 0;
	}
	this.footerNavs[id-1].status = 1;
  }
  
}

  export class footerNav{
    constructor(
	  public  id:number,
	  public  name:string,
	  public  status:number,
	  public  url:string
	){}
  }