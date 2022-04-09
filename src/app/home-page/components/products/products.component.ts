import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

//product-category
  productCategory=[
    {
      title:"عنوان دسته شماره یک",
      src:"../../assets/images/slide-11.jpg",
      icon:"../../assets/images/icon-1.png"
    },
    {
      title:"عنوان دسته شماره دو",
      src:"../../assets/images/slide-7.jpg",
      icon:"../../assets/images/icon-2.png"
    },
    {
      title:"عنوان دسته شماره سه",
      src:"../../assets/images/slide-16.jpg",
      icon:"../../assets/images/icon-3.png"
    },
    {
      title:"عنوان دسته شماره چهار",
      src:"../../assets/images/slide-18.jpg",
      icon:"../../assets/images/icon-4.png"
    }
  ]
  }
