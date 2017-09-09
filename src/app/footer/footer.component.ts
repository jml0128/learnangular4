import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService, footerNav } from '../service/category.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private footerNavs: footerNav[];
  private name : string;
    
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router,
	private CategoryService: CategoryService,
  ){}
  
  ngOnInit() {
	this.name = location.pathname.slice(1);
    this.footerNavs = this.CategoryService.getFooterNav();
	this.CategoryService.chooseFooterNav(this.name)[0].status = 1;
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
