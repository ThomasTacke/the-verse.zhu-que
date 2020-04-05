import { Component, OnInit } from '@angular/core';
import { UiRoom, ROOMS } from 'src/app/@types';
import { SensorsService } from 'src/app/services/sensors.service';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent implements OnInit {
  room: UiRoom = {
    Name: ROOMS.BATHROOM,
    Sensors: this.sensorService.bathroom
  }
  constructor(private sensorService: SensorsService) { }

  ngOnInit(): void { }

}
