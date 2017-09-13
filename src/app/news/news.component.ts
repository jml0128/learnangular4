import { Component, OnInit } from '@angular/core';
import * as swiper from 'swiper';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news : Array<news>;
  
  private newsSwiper : any;
  constructor() { }

  ngOnInit() {
    this.news = [
	  new news(1,"我是新闻1111","#"),
	  new news(2,"我是新闻2","#"),
	  new news(3,"我是新闻3","#"),
	  new news(4,"我是新闻4","#"),
	  new news(5,"我是新闻5","#")
	];
	
	setTimeout(() => {
		this.newsSwiper = new swiper('.news-nswiper', {
		  autoplay : 4000,
		  onlyExternal : true,
		  direction : 'vertical',
		});
	},300)
  }

}
export class news{
    constructor(
	  public  id:number,
	  public  name:string,
	  public  url:string
	){}
  }