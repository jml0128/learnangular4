import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  private news : Array<news>;
  constructor() { }

  ngOnInit() {
    this.news = [
	  new news(1,"我是新闻1111","#"),
	  new news(2,"我是新闻2","#"),
	  new news(3,"我是新闻3","#"),
	  new news(4,"我是新闻4","#"),
	  new news(5,"我是新闻5","#")
	];
  }

}
export class news{
    constructor(
	  public  id:number,
	  public  name:string,
	  public  url:string
	){}
  }