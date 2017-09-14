import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { goodsNum } from '../goods-num/goods-num.component';
import { DataService, buyCar } from '../service/data.service';

@Component({
  selector: 'app-goods-comfirm',
  templateUrl: './goods-comfirm.component.html',
  styleUrls: ['./goods-comfirm.component.css']
})
export class GoodsComfirmComponent implements OnInit {

  @Input()
  private goodsId : number;
  
  private goodsInfo:any;
  
  private lastNum:goodsNum = new goodsNum(1);
  
  constructor(
	private DataService: DataService
	) { }

  ngOnInit() {
	  this.goodsInfo = this.DataService.getGoodsInfo(this.goodsId);
  }

  getNum(event:goodsNum){
	  this.lastNum = event;
  }

}
