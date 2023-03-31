import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductsComponent } from './products/products.component';
import { RedirectComponent } from './redirect/redirect.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: RedirectComponent },
  // child routing
  {
    path: 'contact-us', children: [
      { path: '', component: ContactUsComponent },
      { path: 'child', component: HomeComponent }
    ]
  },
  // nested routing
  {
    path: 'products', component: ProductsComponent, children: [
      { path: 'parent', component: HomeComponent }
    ]
  },
  { path: 'about-us', component: AboutUsComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
