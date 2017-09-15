import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, footerNav, buyCar } from '../service/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private footerNavs: footerNav[];
  private url : string;
  private flag : any;
  private chooseNum : number;
  private buyGoods : buyCar[];
    
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private DataService: DataService
  ){}
  
  ngOnInit() {
	this.url = location.hash.slice(14);
	this.flag = this.DataService.chooseFooterNav(this.url);
    this.footerNavs = this.DataService.getFooterNav();
	if(this.flag){
		this.footerNavs[this.flag].status = 1;
	}
	this.buyGoods = this.DataService.getBuyCars();
	  setInterval(() => {
		this.chooseNum = 0;
		for(let i in this.buyGoods){
			this.chooseNum += this.buyGoods[i].num;
		}
	  },0)
  }
  
  changeStatus(id,url){
	this.router.navigate([url]);
	for(var i in this.footerNavs){
		this.footerNavs[i].status = 0;
	}
	for(var i in this.footerNavs){
	  this.footerNavs[i].status = 0;
	}
	this.footerNavs[id-1].status = 1;
  }
  
}
