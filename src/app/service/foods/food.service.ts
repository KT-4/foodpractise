import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/model/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }


  getAllImg():Foods[]{
    return[
       {
        id:1,
        name:"Cheez Pizza",
        price:240,
        cookTime:'30-35',
        favorite:false,
        origins:['india','Asia'],
        stars:3.0,
        imageUrl:'/assets/piiza1.jpg',
        tags:['SlowFood','Soup']
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
        tags:['SlowFood','Soup']
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
        tags:['SlowFood','Soup']
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
        tags:['SlowFood','Soup']
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
        tags:['SlowFood','Soup']
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
        tags:['SlowFood','Soup']
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
        tags:['SlowFood','Soup']
       },

    ]
  }
}
