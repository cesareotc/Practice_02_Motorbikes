import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  brand: string = "Suzuki";
  model: string = "Gladius";
  engine: string = "650cc";

  constructor(private router: Router) {}

  gotoMyMotorbikes(){
    this.router.navigateByUrl("/my-motorbikes");
  }

  

}
