import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  news=[
    {
      title:"عنوان تستی خبر شماره یک",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-1.jpg"
    },
    {
      title:"عنوان تستی خبر شماره دو",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-6.jpg"
    },
    {
      title:"عنوان تستی خبر شماره سه",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-7.jpg"
    },
    {
      title:"عنوان تستی خبر شماره چهار",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-2.jpg"
    },
    {
      title:"عنوان تستی خبر شماره پنج",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-11.jpg"
    },
    {
      title:"عنوان تستی خبر شماره پنج",
      content:"سایت لورم‌ساز علاوه بر تولید متن ساختگی لورم ایپسوم، انواع ابزارهای آنلاین در زمینه‌های طراحی وبسایت و گرافیک، حسابداری و اندازه‌گیری و دیگر ابزارهای کاربردی برای استفاده در کارهای مختلف ارائه می‌دهد.",
      src:"../../assets/images/slide-10.jpg"
    }
  ]
  constructor(public router:Router) { }
  ngOnInit(): void {
  }
 
//social  
onNavigate(){
    window.open("https://www.instagram.com/samirahoushmand7","_blank");
}
onNavigate2(){
  window.open("https://www.linkedin.com/in/samira-houshmand-b5134571/","_blank");
}
onNavigate3(){
  window.open("https://t.me/samira_houshmand","_blank");
}
onNavigate4(){
  window.open("https://t.me/samira_houshmand","_blank");
}

toggleMenu: boolean=false;    
togglemenu(){this.toggleMenu =!this.toggleMenu}

closemenu(){
  this.toggleMenu=false;
}

}
