import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService, buyCar } from '../service/data.service';

@Component({
  selector: 'app-goods-num',
  templateUrl: './goods-num.component.html',
  styleUrls: ['./goods-num.component.css']
})
export class GoodsNumComponent implements OnInit {
  
  goodsNumber : any;
  
  @Output()
  lastNum : EventEmitter<goodsNum> = new EventEmitter();
  
  @Input()
  firstNum :number;
  
  constructor() { }

  ngOnInit() {
	if(this.firstNum == undefined){
	  this.goodsNumber = new goodsNum(1);
	}else{
	  this.goodsNumber = new goodsNum(this.firstNum);
	}
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