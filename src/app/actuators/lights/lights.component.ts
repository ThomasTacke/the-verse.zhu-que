import { Component, OnInit } from '@angular/core';
import { SensorsService } from 'src/app/services/sensors.service';
import { UiRoom } from 'src/app/@types';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {
  lights: UiRoom = {
    Name: 'Lights',
    Sensors: [
      this.sensorsService.allLights,
      this.sensorsService.kitchenLightPc,
      this.sensorsService.livingRoomLightVitrine,
      this.sensorsService.livingRoomLightNightStand
    ]
  };
  constructor(private sensorsService: SensorsService) { }

  ngOnInit(): void {
  }

}
