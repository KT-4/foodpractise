import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CustomiseComponent } from './menu/customise/customise.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { PizzaComponent } from './menu/pizza/pizza.component';

import {HttpClientModule} from '@angular/common/http';
import { CartComponent } from './cart/cart.component'

import {ToneAudioNode} from 'tone';
import { DetilComponent } from './detil/detil.component';
import { NoodlesComponent } from './noodles/noodles.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HeaderComponent,
    HomeComponent,
    CustomiseComponent,
    PizzaComponent,
    CartComponent,
    DetilComponent,
    NoodlesComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxStarRatingModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
