import { Component, OnInit } from '@angular/core';
import { Room } from '@smart-home-the-verse/the-halo';
import { SensorsService } from 'src/app/services/sensors.service';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.component.html',
  styleUrls: ['./lights.component.css']
})
export class LightsComponent implements OnInit {
  lights: Room = {
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
