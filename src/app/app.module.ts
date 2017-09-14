import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { NewsComponent } from './news/news.component';
import { MeComponent } from './me/me.component';
import { BuycarComponent } from './buycar/buycar.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { DataService } from './service/data.service';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsDetailsComponent } from './goods-details/goods-details.component';
import { GoodsPropertyComponent } from './goods-property/goods-property.component';
import { BuyBtnGroupComponent } from './buy-btn-group/buy-btn-group.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { ChooseGoodsComponent } from './choose-goods/choose-goods.component';
import { GoodsNumComponent } from './goods-num/goods-num.component';

const routes: Routes = [
  {path: '',redirectTo: '/index',pathMatch: 'full'},
  {path: 'index',component: IndexComponent},
  {path: 'category/:id',component: GoodsListComponent},
  {path: 'category-list',component: CategoryListComponent},
  {path: 'goods/:id',component: GoodsDetailsComponent},
  {path: 'goods-property/:id',component: GoodsPropertyComponent},
  {path: 'me',component: MeComponent},
  {path: 'buycar',component: BuycarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    BannerComponent,
    NewsComponent,
    MeComponent,
    BuycarComponent,
    HeaderComponent,
    IndexComponent,
    CategoryListComponent,
    GoodsListComponent,
    GoodsDetailsComponent,
	GoodsPropertyComponent,
	BuyBtnGroupComponent,
	CategoryNavComponent,
	ChooseGoodsComponent,
	GoodsNumComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	HttpClientModule
  ],
  providers: [DataService,
  {provide:LocationStrategy, useClass:HashLocationStrategy},
  { provide: APP_BASE_HREF, useValue: '/angularshop/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
