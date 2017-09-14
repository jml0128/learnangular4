import { Component, OnInit } from '@angular/core';
import * as swiper from 'swiper';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  private mySwiper:any;
  constructor(
  ) { 
    
  }

  ngOnInit() {
	this.mySwiper = new swiper('.banner-swiper', {
		pagination : '.swiper-pagination',
		autoplay : 5000,
        autoplayDisableOnInteraction : false,
		loop : true,
		});
  }
  
}
