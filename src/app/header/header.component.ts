import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonService } from '../service/button.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit , OnDestroy{


  goback:boolean = true


  constructor(private _button:ButtonService,private router:Router) { 
       
  }

  ngOnInit(): void {
    this._button.goback.subscribe(res => {
      this.goback = res;
     })    
  }

  ngOnDestroy(): void {
    this._button.goback.subscribe(res => {
      this.goback = res;
     })    
  }


  goBack(){
     this.router.navigate(['home'])
     let audio = new Audio()
    audio.src = "../../assets/sound/mixkit-water-sci-fi-bleep-902.wav"
    audio.load()
    audio.play()
  }

}

