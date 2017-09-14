import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goods-num',
  templateUrl: './goods-num.component.html',
  styleUrls: ['./goods-num.component.css']
})
export class GoodsNumComponent implements OnInit {

  private goodsNum : number;
  
  constructor() { }

  ngOnInit() {
	
	this.goodsNum = 1;
  }

  addNum(){
	  this.goodsNum += 1;
  }
  reduceNum(){
	  if(this.goodsNum < 2){
		  return;
	  }
	  this.goodsNum -= 1;
  }
}
