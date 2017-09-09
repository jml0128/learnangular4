import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
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

const routes: Routes = [
  {path: '',redirectTo: '/index',pathMatch: 'full'},
  {path: 'index',component: IndexComponent},
  {path: 'category/:id',component: GoodsListComponent},
  {path: 'category-list',component: CategoryListComponent},
  {path: 'me',component: MeComponent},
  {path: 'buycar',component: BuycarComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    NewsComponent,
    MeComponent,
    BuycarComponent,
    HeaderComponent,
    IndexComponent,
    CategoryListComponent,
    GoodsListComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
