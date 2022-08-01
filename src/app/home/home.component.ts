import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ButtonService } from '../service/button.service';
import { FoodService } from '../service/foods/food.service';
import { Foods } from '../shared/model/food';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit , OnDestroy {
   foods:Foods[] = [];
   public form!:FormGroup;

   rating3:any;
  constructor(private fs:FoodService,private fb:FormBuilder,private router:Router,private _button:ButtonService) { 
    
  }

  ngOnInit(): void {
    this._button.goback.next(false)
     this.foods = this.fs.getAllImg();  //return food data
  }

  ngOnDestroy(): void {
    this._button.goback.next(true)
  }

  goCustomise(){
    this.router.navigate(['menu/pizza'])
    let audio = new Audio();
    audio.src = "../../assets/sound/mixkit-water-sci-fi-bleep-902.wav"
    audio.load();
    audio.play();
  }

  goNoodles(){
    this.router.navigate(['menu/noodle'])
    let audio = new Audio();
    audio.src = "../../assets/sound/mixkit-water-sci-fi-bleep-902.wav"
    audio.load();
    audio.play();
  }
  
   
}

