import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { LoginComponent } from './components/login/login.component';
import { MainCarouselComponent } from './components/main-carousel/main-carousel.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductsComponent } from './components/products/products.component';
import { NewsComponent } from './components/news/news.component';
import { KnowledgeComponent } from './components/knowledge/knowledge.component';
import { GalleryComponent } from './components/gallery/gallery.component';

@NgModule({
  declarations: [
    HomePageComponent,
    LoginComponent,
    MainCarouselComponent,
    ProductsComponent,
    NewsComponent,
    KnowledgeComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    CarouselModule
  ]
})
export class HomePageModule { }
