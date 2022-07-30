import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { FoodService } from '../service/foods/food.service';
import { Foods } from '../shared/model/food';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   foods:Foods[] = [];
   public form!:FormGroup
   rating3:any;
  constructor(private fs:FoodService,private fb:FormBuilder,private router:Router) { 
    
  }

  ngOnInit(): void {
     this.foods = this.fs.getAllImg();  //return food data
  }

  goCustomise(){
    this.router.navigate(['menu/pizza'])
  }
   
}

