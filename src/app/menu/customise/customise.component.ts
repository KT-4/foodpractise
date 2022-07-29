import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/service/foods/food.service';
import { Foods } from '../../shared/model/food'

@Component({
  selector: 'app-customise',
  templateUrl: './customise.component.html',
  styleUrls: ['./customise.component.css']
})
export class CustomiseComponent implements OnInit {
  foods:Foods[] = [];
  constructor(private foodservice:FoodService) { }

  ngOnInit(): void {
     this.foods = this.foodservice.getAllImg()
  }

}
