import { Component, OnInit } from '@angular/core';
import { KnowledgeModel } from 'src/app/models/knowledge.model';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  getUrl(){return "url('../../assets/images/slide-21.jpg')";}



  //knowledge
  knowledge:KnowledgeModel={
    title:"دانستنی های  پوست و مو",
    description:"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و",
    myproducts:"محصولات ما",
    myknowledge:"دانستنی های ما",
  }
}
