import { Injectable } from '@angular/core';
import { SensorsService } from './sensors.service';
import { Room } from '@smart-home-the-verse/the-halo';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  kitchen: Room = {
    Name: 'Kitchen',
    Sensors: [
      this.sensorsService.kitchenNodeMcuTemperature,
      this.sensorsService.kitchenNodeMmcuHumidity,
      this.sensorsService.kitchenTadoTemperature,
      this.sensorsService.kitchenTadoHumidity,
      this.sensorsService.kitchenLightPc]
  };

  floor: Room = {
    Name: 'Floor',
    Sensors: [
      this.sensorsService.floorNodeMcuTemperature,
      this.sensorsService.floorNodeMcuHumidity
    ]
  };

  bathroom: Room = {
    Name: 'Bathroom',
    Sensors: [
      this.sensorsService.bathroomTadoTemperature,
      this.sensorsService.bathroomTadoHumidity
    ]
  };

  livingRoom: Room = {
    Name: 'Living Room',
    Sensors: [
      this.sensorsService.livingRoomTadoTemperature,
      this.sensorsService.livingRoomTadoHumidity,
      this.sensorsService.livingRoomLightNightStand,
      this.sensorsService.livingRoomLightVitrine
    ]
  };

  constructor(private sensorsService: SensorsService) { }

  getAllRooms(): Array<Room> {
    return [
      this.kitchen,
      this.livingRoom,
      this.floor,
      this.bathroom
    ];
  }
}
