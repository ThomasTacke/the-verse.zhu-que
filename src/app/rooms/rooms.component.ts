import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Room, MqttHandlerService, Sensor } from '../service/mqtt-handler.service';
import { Observable } from 'rxjs';
import { tap, map, bufferCount } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit, OnDestroy {
  @Input() name: string;
  room: Room;
  $sensorValues: Map<string, Observable<string>> = new Map<string, Observable<string>>();

  constructor(private mqttHandlerService: MqttHandlerService, private route: ActivatedRoute) { }

  public payload$: Observable<string>;
  public diff$: Observable<string>;

  sub: any;

  ngOnInit(): void {
    this.room = this.mqttHandlerService[this.name];

    this.sub = this.route.data.subscribe(data => {
      if ('rooms' in data) {
        data.rooms.forEach((roomName: string) => {
          this.room = this.mqttHandlerService[roomName];
        });
      }
    });

    this.doDiff(this.room.sensors);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  public doDiff(sensors: Sensor[]) {
    sensors.forEach(sensor => {
      const obs = sensor.value.pipe(
        tap(console.log),
        map(message => message.payload.toString()),
        bufferCount(2, 1),
        tap(console.log),
        map((payload: string[]) => {
          const content1 = Number(payload[0]);
          const content2 = Number(payload[1]);
          if (!isNaN(content1) && !isNaN(content2)) {
            return (content2 - content1) >= 0 ? '+' : '-';
            // return (content1 - content2).toString();
          } else {
            console.log(payload[0], payload[1]);
            if (payload[0] !== payload[1]) {
              return payload[0] === 'on' ? 'toOff' : 'toOn';
            }
            return 'noChange';
          }
        }),
        tap(console.log));

      this.$sensorValues.set(sensor.name, obs);
    });
  }

  public getDiff(sensor: Sensor): Observable<string> {
    return this.$sensorValues.get(sensor.name);
  }
}
