import { Injectable } from '@angular/core';
import { Pizza } from 'src/app/shared/model/pizza'; 

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(){ }

   getAllPizza():Pizza[]{
     return [
        {
         id:1,
         name:"Cheez Pizza",
         price:240,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/piiza1.jpg',
     
        },
        {
         id:2,
         name:"cheese-corn",
         price:80,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/pizzas/cheesencorn.jpg'
     
        },
        {
         id:3,
         name:"deluxveggi",
         price:120,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/pizzas/deluxveggi.jpg',
     
        },
        {
         id:4,
         name:"maxicun green wave",
         price:120,
         cookTime:'30-35',
         favorite:true,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/pizzas/maxicun green wave.jpg',
   
        },
        {
         id:5,
         name:"peppy panner",
         price:240,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/pizzas/peppy paneer.jpg',
         
        },
        

     ]
   }

   
}
