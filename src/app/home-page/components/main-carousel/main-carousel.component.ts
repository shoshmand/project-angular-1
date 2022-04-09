import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  //slides
    slides=[
      {
        id:'1',
        title:"عنوان تستی اسلاید اول",
        content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
        src:"../../assets/images/slide-21.jpg",
        alt:"اسلاید اول"
      },
      {
        id:'2',
        title:"عنوان تستی اسلاید دوم",
        content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
        src:"../../assets/images/slide-16.jpg",
        alt:"اسلاید دوم"
      },
      {
        id:'2',
        title:"عنوان تستی اسلاید دوم",
        content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
        src:"../../assets/images/slide-22.jpg",
        alt:"اسلاید دوم"
      },
    ]
    //customOptions
    customOptions:OwlOptions = {
      rtl:true,
      loop:true,
      mouseDrag:true,
      touchDrag:true,
      pullDrag:true,
      dots:true,
      navSpeed:700,
      items:1
  };
}
