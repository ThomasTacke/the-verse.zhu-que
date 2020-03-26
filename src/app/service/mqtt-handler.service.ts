import { Injectable } from '@angular/core';
import { MqttService } from 'ngx-mqtt';
import { tap, map, shareReplay, delay, concatMap, mapTo } from 'rxjs/operators';
import { Room } from '../models/room';
import { Sensor } from '../models/sensor';
import { Icons } from '../models/icons';

@Injectable({
  providedIn: 'root'
})
export class MqttHandlerService {
  kitchen: Room = new Room('Kitchen', []);
  floor: Room = new Room('Floor', []);
  livingRoom: Room = new Room('Living Room', []);
  bathroom: Room = new Room('Bathroom', []);

  constructor(private mqttService: MqttService) {
    this.subscribeRoomFeatures();
  }

  private subscribeRoomFeatures(): void {
    this.subscribeRoomFeature(this.kitchen, 'Temperature NodeMCU', 'the-verse/kitchen/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.kitchen, 'Humidity NodeMCU', 'the-verse/kitchen/humidity', Icons.humidityIcon);
    this.subscribeRoomFeature(this.kitchen, 'Temperature Tado', 'the-verse/kitchen/tado/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.kitchen, 'Humidity Tado', 'the-verse/kitchen/tado/humidity', Icons.humidityIcon);
    this.subscribeRoomFeature(this.kitchen, 'Light', 'the-verse/kitchen-pc/light', Icons.lightIcon);
    this.subscribeRoomFeature(this.floor, 'Temperature NodeMCU', 'the-verse/floor/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.floor, 'Humidity NodeMCU', 'the-verse/floor/humidity', Icons.humidityIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Temperature Tado', 'the-verse/living-room/tado/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Humidity Tado', 'the-verse/living-room/tado/humidity', Icons.humidityIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Vitrine Light', 'the-verse/vitrine/light', Icons.lightIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Nightstand Light', 'the-verse/nightstand/light', Icons.lightIcon);
    this.subscribeRoomFeature(this.bathroom, 'Temperature Tado', 'the-verse/bathroom/tado/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.bathroom, 'Humidity Tado', 'the-verse/bathroom/tado/humidity', Icons.humidityIcon);

    // this.kitchen.sensors.push(new Sensor('Fake', timer(1000, 5000).pipe(map(i => {
    //   return { payload: (i * 2).toString() }
    // }),
    //   shareReplay(2)) as Observable<IMqttMessage>, this.temperatureIcon));

    // this.kitchen.sensors.push(new Sensor('Fake', merge(
    //   of(null).pipe(mapTo({ payload: '1' }), delay(1000)),
    //   of(null).pipe(mapTo({ payload: '3' }), delay(5000)),
    // ).pipe(shareReplay(2)) as Observable<IMqttMessage>, this.temperatureIcon));
  }

  private subscribeRoomFeature(room: Room, sensorName: string, topic: string, icon: string): void {
    room.sensors.push(new Sensor(sensorName, this.mqttService.observe(topic).pipe(shareReplay(2)), icon));
  }
}
