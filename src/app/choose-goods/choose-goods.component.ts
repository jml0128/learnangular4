import { Component, OnInit, Input } from '@angular/core';
import { DataService, buyCar } from '../service/data.service';

@Component({
  selector: 'app-choose-goods',
  templateUrl: './choose-goods.component.html',
  styleUrls: ['./choose-goods.component.css']
})
export class ChooseGoodsComponent implements OnInit {
	
  private buyGoods : buyCar[];
  private price : any;
  constructor(
	private DataService: DataService
	) { }

  ngOnInit() {
	  this.buyGoods = this.DataService.getBuyCars();
  }
}