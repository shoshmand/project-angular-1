import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  galleries=[
    {
      id:'1',
      title:"عنوان تستی اسلاید اول",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-1.jpg",
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
      id:'3',
      title:"عنوان تستی اسلاید سوم",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-14.jpg",
      alt:"اسلاید دوم"
    },
    {
      id:'4',
      title:"عنوان تستی اسلاید چهارم",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-7.jpg",
      alt:"اسلاید اسلاید چهارم"
    },
  ]
  
  customOption: OwlOptions = {
    rtl:true,
    loop:true,
    mouseDrag:true,
    touchDrag:true,
    pullDrag:true,
    dots:true,
    navSpeed:700,
    margin:20,
    stagePadding:50,
    navText:['', ''],
    responsive:{
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }

}
