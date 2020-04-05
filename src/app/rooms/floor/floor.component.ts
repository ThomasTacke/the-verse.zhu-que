import { Component, OnInit } from '@angular/core';
import { SensorsService } from 'src/app/services/sensors.service';
import { UiRoom, ROOMS } from 'src/app/@types';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  room: UiRoom = {
    Name: ROOMS.FLOOR,
    Sensors: this.sensorsService.floor
  };
  constructor(private sensorsService: SensorsService) { }

  ngOnInit(): void { }

}
