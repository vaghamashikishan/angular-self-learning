import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';



import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

import { RedirectComponent } from './redirect/redirect.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SameContentComponent } from './same-content/same-content.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { InOutDecoratorComponent } from './in-out-decorator/in-out-decorator.component';
import { ChildComponentComponent } from './in-out-decorator/child-component/child-component.component';

import { DesignServiceService } from './appServices/design-service.service';
import { HttpPracticeComponent } from './http-practice/http-practice.component';
import { RendererComponent } from './renderer/renderer.component';
import { BackGroundDirective } from './appDirectives/back-ground.directive';
import { HostBindingComponent } from './host-binding/host-binding.component';
import { DropdownDirective } from './appDirectives/dropdown.directive';
import { PipesComponent } from './pipes/pipes.component';
import { FirstPipePipe } from './appPipes/first-pipe.pipe';
import { FilterProductsPipe } from './appPipes/filter-products.pipe';
import { FormsModule } from '@angular/forms';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServicesModule } from '../app/learn-services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    HomeComponent,
    ContactUsComponent,
    ProductsComponent,
    AboutUsComponent,
    NavigationBarComponent,
    RedirectComponent,
    NotFoundComponent,
    SameContentComponent,
    ParentComponent,
    ChildComponent,
    InOutDecoratorComponent,
    ChildComponentComponent,
    HttpPracticeComponent,
    RendererComponent,
    BackGroundDirective,
    HostBindingComponent,
    DropdownDirective,
    PipesComponent,
    FirstPipePipe,
    FilterProductsPipe,
    TemplateDrivenFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServicesModule
  ],
  providers: [DesignServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
