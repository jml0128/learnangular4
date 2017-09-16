import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DataService, userMenu } from '../service/data.service';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.css']
})
export class MeComponent implements OnInit {
  
  private userMenus: Array<userMenu>;
  
  constructor(
	private DataService: DataService,
	private routeInfo: ActivatedRoute,
	private router: Router,
	) { }
  
  ngOnInit() {
	this.userMenus = this.DataService.getUserMenus();
  }
  
  chooseMenu(url){
	this.router.navigate(['./',url,'1']);
  }
}
