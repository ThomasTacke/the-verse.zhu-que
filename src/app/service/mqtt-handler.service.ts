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

  constructor(private mqttService: MqttService) {
    this.subscribeRoomFeatures();
  }

  private subscribeRoomFeatures(): void {
    this.subscribeRoomFeature(this.kitchen, 'Temperature', 'the-verse/kitchen/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.kitchen, 'Humidity', 'the-verse/kitchen/humidity', Icons.humidityIcon);
    this.subscribeRoomFeature(this.kitchen, 'Light', 'the-verse/kitchen-pc/light', Icons.lightIcon);

    // this.kitchen.sensors.push(new Sensor('Fake', timer(1000, 5000).pipe(map(i => { return { payload: (i*2).toString() }}), shareReplay(2)) as Observable<IMqttMessage>, this.temperatureIcon));

    // this.kitchen.sensors.push(new Sensor('Fake', merge(
    //   of(null).pipe(mapTo({ payload: '1' }), delay(1000)),
    //   of(null).pipe(mapTo({ payload: '3' }), delay(5000)),
    // ).pipe(shareReplay(2)) as Observable<IMqttMessage>, this.temperatureIcon));

    this.subscribeRoomFeature(this.floor, 'Temperature', 'the-verse/floor/temperature', Icons.temperatureIcon);
    this.subscribeRoomFeature(this.floor, 'Humidity', 'the-verse/floor/humidity', Icons.humidityIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Vitrine Light', 'the-verse/vitrine/light', Icons.lightIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Nightstand Light', 'the-verse/nightstand/light', Icons.lightIcon);
  }

  private subscribeRoomFeature(room: Room, sensorName: string, topic: string, icon: string): void {
    room.sensors.push(new Sensor(sensorName, this.mqttService.observe(topic).pipe(shareReplay(2)), icon));
  }
}
