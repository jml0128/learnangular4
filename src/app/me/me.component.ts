import { Component, OnInit } from '@angular/core';
import { DataService, userMenu } from '../service/data.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  
  private userMenus: Array<userMenu>;
  
  constructor(
	private DataService: DataService
	) { }
  
  ngOnInit() {
	this.userMenus = this.DataService.getUserMenus();
	console.log(this.userMenus);
  }

}
