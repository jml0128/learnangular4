import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { NewsComponent } from './news/news.component';
import { CategoryComponent } from './category/category.component';
import { MeComponent } from './me/me.component';
import { BuycarComponent } from './buycar/buycar.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { CategoryListComponent } from './category-list/category-list.component';

const routes: Routes = [
  {path: '',redirectTo: '/index',pathMatch: 'full'},
  {path: 'index',component: IndexComponent},
  {path: 'category/:id',component: CategoryComponent},
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
    ProductComponent,
    NewsComponent,
    CategoryComponent,
    MeComponent,
    BuycarComponent,
    HeaderComponent,
    IndexComponent,
    CategoryListComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes),
	HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
