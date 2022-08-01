import { Injectable } from '@angular/core';
import {noodles} from '../shared/model/noodle'

@Injectable({
  providedIn: 'root'
})
export class NoodlesService {
  
  constructor() { }


  getAllNoodles():noodles[]{
    return [
      {
       id:1,
       name:"MasalaNoodles",
       price:240,
       cookTime:'30-35',
       favorite:false,
       origins:['india','Asia'],
       stars:3.0,
       imageUrl:'/assets/noodles/masala noodels.jpg',
   
      },
      {
       id:2,
       name:"schezwannoodles",
       price:80,
       cookTime:'30-35',
       favorite:false,
       origins:['india','Asia'],
       stars:3.0,
       imageUrl:'/assets/noodles/schezwannoodles.jpg'
   
      },
      {
       id:3,
       name:"vegitable-hakka-noodles",
       price:120,
       cookTime:'30-35',
       favorite:false,
       origins:['india','Asia'],
       stars:3.0,
       imageUrl:'/assets/noodles/vegetable-hakka-noodles.jpg',
   
      },
      {
       id:4,
       name:"maxicun green wave",
       price:120,
       cookTime:'30-35',
       favorite:true,
       origins:['india','Asia'],
       stars:3.0,
       imageUrl:'/assets/pizzas/noodles/chheseNoodles.jpg',
 
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
