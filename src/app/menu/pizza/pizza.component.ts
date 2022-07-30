import { Component, OnInit } from '@angular/core';
import { PizzaService } from 'src/app/service/pizzas/pizza.service';
import {Pizza} from '../../shared/model/pizza';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent implements OnInit {
   pizzas!:Pizza[]
  constructor(private pizzaservice:PizzaService,private router:Router) { }

  ngOnInit(): void {
    this.pizzas = this.pizzaservice.getAllPizza()
  }
  goCart(){
    this.router.navigate(['cart'])
  }

}
