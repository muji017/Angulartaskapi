import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-errorpage',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent {
  constructor(
    private router:Router
  ){}
  redirect(){
      this.router.navigate(['/'])
      return
    }
}
