import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { DataService, buyCar } from '../service/data.service';

@Component({
  selector: 'app-choose-goods',
  templateUrl: './choose-goods.component.html',
  styleUrls: ['./choose-goods.component.css']
})
export class ChooseGoodsComponent implements OnInit {
	
  private buyGoods : buyCar[];
  
  @Input()
  private allPrice : number = 0;
  
  private chooseNum : number = 0;
  
  private price : any;
  constructor(
	private DataService: DataService
	) { }

  ngOnInit() {
	  this.buyGoods = this.DataService.getBuyCars();
	  setInterval(() => {
		this.allPrice = 0;
		this.chooseNum = 0;
		for(let i in this.buyGoods){
			if(this.buyGoods[i].status == 1){
			  this.allPrice += this.buyGoods[i].num * this.buyGoods[i].price;
			  this.chooseNum += 1;
			}
		}
	  },0)
  }
  
}