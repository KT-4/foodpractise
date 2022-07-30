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
         name:"Burgur",
         price:80,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/bigburger.jpg'
     
        },
        {
         id:3,
         name:"Manchuriun",
         price:120,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/manchuriun.jpg',
     
        },
        {
         id:4,
         name:"Soup",
         price:120,
         cookTime:'30-35',
         favorite:true,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/soup.jpg',
   
        },
        {
         id:5,
         name:"Cheez Pizza",
         price:240,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/piiza1.jpg',
         
        },
        {
         id:6,
         name:"Burgur",
         price:80,
         cookTime:'30-35',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/burger1.jpg',
        
        },
        {
         id:7,
         name:"Manchuriun",
         price:120,
         cookTime:'30-35',
         favorite:true,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/manchuriun.jpg',
        
        },
        {
         id:8,
         name:"Soup",
         price:120,
         cookTime:'10-1 5',
         favorite:false,
         origins:['india','Asia'],
         stars:3.0,
         imageUrl:'/assets/soup.jpg',
  
        },

     ]
   }

   
}
