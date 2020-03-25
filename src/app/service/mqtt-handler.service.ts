import { Injectable } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { tap, map, shareReplay, delay, concatMap, mapTo } from 'rxjs/operators';
import { Observable, of, from, timer, merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MqttHandlerService {
  private temperatureIcon = 'thermometer';
  private humidityIcon = 'water-percent';
  private lightIcon = 'lightbulb';

  kitchen: Room = new Room('Kitchen', []);
  floor: Room = new Room('Floor', []);
  livingRoom: Room = new Room('Living Room', []);

  constructor(private mqttService: MqttService) {

    this.subscribeRoomFeatures();
  }

  private subscribeRoomFeatures(): void {
    this.subscribeRoomFeature(this.kitchen, 'Temperature', 'the-verse/kitchen/temperature', this.temperatureIcon);
    this.subscribeRoomFeature(this.kitchen, 'Humidity', 'the-verse/kitchen/humidity', this.humidityIcon);
    this.subscribeRoomFeature(this.kitchen, 'Light', 'the-verse/kitchen-pc/light', this.lightIcon);

    // this.kitchen.sensors.push(new Sensor('Fake', timer(1000, 5000).pipe(map(i => { return { payload: (i*2).toString() }}), shareReplay(2)) as Observable<IMqttMessage>, this.temperatureIcon));

    // this.kitchen.sensors.push(new Sensor('Fake', merge(
    //   of(null).pipe(mapTo({ payload: '1' }), delay(1000)),
    //   of(null).pipe(mapTo({ payload: '3' }), delay(5000)),
    // ).pipe(shareReplay(2)) as Observable<IMqttMessage>, this.temperatureIcon));

    this.subscribeRoomFeature(this.floor, 'Temperature', 'the-verse/floor/temperature', this.temperatureIcon);
    this.subscribeRoomFeature(this.floor, 'Humidity', 'the-verse/floor/humidity', this.humidityIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Vitrine Light', 'the-verse/vitrine/light', this.lightIcon);
    this.subscribeRoomFeature(this.livingRoom, 'Nightstand Light', 'the-verse/nightstand/light', this.lightIcon);
  }

  private subscribeRoomFeature(room: Room, name: string, topic: string, icon: string): void {
    room.sensors.push(new Sensor(name, this.mqttService.observe(topic).pipe(shareReplay(2)), icon));
  }
}

export class Room {
  constructor(
    public room: string,
    public sensors: Sensor[]
  ) { }
}

export class Sensor {
  constructor(
    public name: string,
    public value: Observable<IMqttMessage>,
    public svgIcon?: string,
  ) { }
}
