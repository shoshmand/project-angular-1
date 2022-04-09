import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { KnowledgeComponent } from './home-page/components/knowledge/knowledge.component';
import { KnowledgeListComponent } from './knowledge-list/knowledge-list.component';
import { LoginComponent } from './login/login.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsComponent } from './news/news.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'',loadChildren:()=>import('./home-page/home-page.module').then(m => m.HomePageModule) },
  {path:'news',component:NewsComponent},
  {path:'products',component:ProductsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:LoginComponent},
  {path:'newsdetail',component:NewsDetailComponent},
  {path:'knowledgelist',component:KnowledgeListComponent},
  {path:'homepage',loadChildren:()=>import('./home-page/home-page.module').then(m => m.HomePageModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
