import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

import { HomeComponent } from './home/home.component';
import { CustomiseComponent } from './menu/customise/customise.component';
import { PizzaComponent } from './menu/pizza/pizza.component';
import { NoodlesComponent } from './noodles/noodles.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'menu/customise',component:CustomiseComponent},
  {path:'menu/pizza',component:PizzaComponent},
  {path:'cart',component:CartComponent},
  {path:'menu/noodle',component:NoodlesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
