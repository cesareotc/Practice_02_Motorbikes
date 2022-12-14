import { Component, OnInit } from '@angular/core';
import { MotorbikeService } from '../services/motorbike.service';

@Component({
  selector: 'app-my-motorbikes',
  templateUrl: './my-motorbikes.page.html',
  styleUrls: ['./my-motorbikes.page.scss'],
})
export class MyMotorbikesPage implements OnInit {

  /*
  motorbikes: any = [
    {
      id: 1,
      brand: "Suzuki",
      model: "Gladius",
      engine: "650cc"
    }, {
      id: 2,
      brand: "Honda",
      model: "VF750",
      engine: "750cc"      
    }
  ]
  */

  motorbikes: any = [];

  constructor(private motorbikeService: MotorbikeService) { }

  ngOnInit() {
    this.getAllMotorbikes();
  }

  getAllMotorbikes() {
    this.motorbikeService.getMotorbikes().subscribe(response => {
      this.motorbikes = response;
    })
  }

}
