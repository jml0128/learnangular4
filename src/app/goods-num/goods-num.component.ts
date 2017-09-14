import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-goods-num',
  templateUrl: './goods-num.component.html',
  styleUrls: ['./goods-num.component.css']
})
export class GoodsNumComponent implements OnInit {
  
  goodsNumber : any;
  
  @Output()
  lastNum : EventEmitter<goodsNum> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
	this.goodsNumber = new goodsNum(1);
  }

  addNum(){
	  this.goodsNumber.num += 1;
	  this.lastNum.emit(this.goodsNumber);
  }
  reduceNum(){
	  if(this.goodsNumber.num < 2){
		  return;
	  }
	  this.goodsNumber.num -= 1;
	  this.lastNum.emit(this.goodsNumber);
  }
}
export class goodsNum{
  constructor(
	public num: number,
  ){}
}