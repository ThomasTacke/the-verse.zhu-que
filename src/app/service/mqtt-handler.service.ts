import { Injectable } from '@angular/core';
import { MqttService, IMqttMessage } from 'ngx-mqtt';
import { tap, map } from 'rxjs/operators';

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
    this.kitchen.sensor.push(new Sensor('Temperature', '', this.temperatureIcon));
    this.mqttService.observe('the-verse/kitchen/temperature').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.kitchen.sensor[0].value = message.payload.toString();
      })
    ).subscribe();
    this.kitchen.sensor.push(new Sensor('Humidity', '', this.humidityIcon));
    this.mqttService.observe('the-verse/kitchen/humidity').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.kitchen.sensor[1].value = message.payload.toString();
      })
    ).subscribe();
    this.kitchen.sensor.push(new Sensor('Light', '', this.lightIcon));
    this.mqttService.observe('the-verse/kitchen-pc/light').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.kitchen.sensor[2].value = message.payload.toString();
      })
    ).subscribe();

    this.floor.sensor.push(new Sensor('Temperature', '', this.temperatureIcon));
    this.mqttService.observe('the-verse/floor/temperature').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.floor.sensor[0].value = message.payload.toString();
      })
    ).subscribe();
    this.floor.sensor.push(new Sensor('Humidity', '', this.humidityIcon));
    this.mqttService.observe('the-verse/floor/humidity').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.floor.sensor[1].value = message.payload.toString();
      })
    ).subscribe();

    this.livingRoom.sensor.push(new Sensor('Vitrine Light', '', this.lightIcon));
    this.mqttService.observe('the-verse/vitrine/light').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.livingRoom.sensor[0].value = message.payload.toString();
      })
    ).subscribe();
    this.livingRoom.sensor.push(new Sensor('Nightstand Light', '', this.lightIcon));
    this.mqttService.observe('the-verse/nightstand/light').pipe(
      tap(console.log),
      map((message: IMqttMessage) => {
        this.livingRoom.sensor[1].value = message.payload.toString();
      })
    ).subscribe();
  }

}

export class Room {
  constructor(
    public room: string,
    public sensor: Sensor[]
  ) { }
}

export class Sensor {
  constructor(
    public sensor: string,
    public value: string,
    public svgIcon?: string,
  ) { }
}
