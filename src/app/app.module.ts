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
import { NewsBannerComponent } from './news-banner/news-banner.component';

const routes: Routes = [
  {path: '',component: NewsBannerComponent},
  {path: 'category/:id',component: CategoryComponent},
  {path: 'category',component: CategoryComponent}
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
    NewsBannerComponent
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
