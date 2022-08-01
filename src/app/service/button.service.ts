import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ButtonService {

  constructor() { }
 // for header goback details
  goback = new BehaviorSubject(true)
}
