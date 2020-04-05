import { Component, OnInit } from '@angular/core';
import { UiRoom, ROOMS } from 'src/app/@types';
import { SensorsService } from 'src/app/services/sensors.service';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent implements OnInit {
  room: UiRoom = {
    Name: ROOMS.LIVING_ROOM,
    Sensors: this.sensorsService.livingroom
  };

  constructor(private sensorsService: SensorsService) { }

  ngOnInit(): void { }

}
