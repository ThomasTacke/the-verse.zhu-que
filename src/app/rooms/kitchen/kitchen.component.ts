import { Component, OnInit } from '@angular/core';
import { SensorsService } from 'src/app/services/sensors.service';
import { UiRoom, ROOMS } from 'src/app/@types';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  room: UiRoom = {
    Name: ROOMS.KITCHEN,
    Sensors: this.sensorsService.kitchen
  };

  constructor(private sensorsService: SensorsService) { }

  ngOnInit(): void { }

}
