import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NoodlesService } from '../service/noodles.service';
import { noodles } from '../shared/model/noodle';


@Component({
  selector: 'app-noodles',
  templateUrl: './noodles.component.html',
  styleUrls: ['./noodles.component.css']
})
export class NoodlesComponent implements OnInit {
  noodle!:noodles[]
  constructor(private noodleservice:NoodlesService,private router:Router) { }
   
  ngOnInit(): void {
    this.noodle = this.noodleservice.getAllNoodles()
  }

  goCart(){
    this.router.navigate(['cart'])
    let audio = new Audio()
    audio.src = "../../assets/sound/mixkit-water-sci-fi-bleep-902.wav"
    audio.load()
    audio.play()
    
  }

}
