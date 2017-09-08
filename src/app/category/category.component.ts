import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Params } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  private categoryId : number;
  
  constructor(
	private routeInfo: ActivatedRoute,
	private router: Router
  ) {}
  
  ngOnInit() {
    this.routeInfo.params.subscribe((params:Params) => this.categoryId = params["id"]);
  }

}
