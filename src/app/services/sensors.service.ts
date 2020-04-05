import { Injectable } from '@angular/core';
import { UiSensor, ICONS, ROOMS } from '../@types';
import { DEVICE, SENSOR_TYPE } from '@smart-home-the-verse/the-halo';
import { BehaviorSubject, Observable } from 'rxjs';
import { MqttService } from 'ngx-mqtt';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SensorsService {
  kitchenLightPc: UiSensor = {
    Name: 'Light PC',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/kitchen-pc/light',
    SvgIcon: new BehaviorSubject<string>(ICONS.LIGHTBULB_OFF),
    Type: SENSOR_TYPE.LIGHT,
    Value: new BehaviorSubject<string>(null),
    LightState: new BehaviorSubject<boolean>(false),
    Room: ROOMS.KITCHEN
  };
  kitchenTadoTemperature: UiSensor = {
    Name: 'Temperature',
    Device: DEVICE.TADO,
    Topic: 'the-verse/kitchen/tado/temperature',
    SvgIcon: new BehaviorSubject<string>(ICONS.TEMPERATURE),
    Type: SENSOR_TYPE.TEMPERATURE,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.KITCHEN
  };
  kitchenTadoHumidity: UiSensor = {
    Name: 'Humidity',
    Device: DEVICE.TADO,
    Topic: 'the-verse/kitchen/tado/humidity',
    SvgIcon: new BehaviorSubject<string>(ICONS.HUMIDITY),
    Type: SENSOR_TYPE.HUMIDITY,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.KITCHEN
  };
  kitchenNodeMcuTemperature: UiSensor = {
    Name: 'Temperature',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/kitchen/temperature',
    SvgIcon: new BehaviorSubject<string>(ICONS.TEMPERATURE),
    Type: SENSOR_TYPE.TEMPERATURE,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.KITCHEN
  };
  kitchenNodeMmcuHumidity: UiSensor = {
    Name: 'Humidity',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/kitchen/humidity',
    SvgIcon: new BehaviorSubject<string>(ICONS.HUMIDITY),
    Type: SENSOR_TYPE.HUMIDITY,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.KITCHEN
  };

  floorNodeMcuTemperature: UiSensor = {
    Name: 'Temperature',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/floor/temperature',
    SvgIcon: new BehaviorSubject<string>(ICONS.TEMPERATURE),
    Type: SENSOR_TYPE.TEMPERATURE,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.FLOOR
  };
  floorNodeMcuHumidity = {
    Name: 'Humidity',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/floor/humidity',
    SvgIcon: new BehaviorSubject<string>(ICONS.HUMIDITY),
    Type: SENSOR_TYPE.HUMIDITY,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.FLOOR
  };

  bathroomTadoTemperature: UiSensor = {
    Name: 'Temperature',
    Device: DEVICE.TADO,
    Topic: 'the-verse/bathroom/tado/temperature',
    SvgIcon: new BehaviorSubject<string>(ICONS.TEMPERATURE),
    Type: SENSOR_TYPE.TEMPERATURE,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.BATHROOM
  };
  bathroomTadoHumidity: UiSensor = {
    Name: 'Humidity',
    Device: DEVICE.TADO,
    Topic: 'the-verse/bathroom/tado/humidity',
    SvgIcon: new BehaviorSubject<string>(ICONS.HUMIDITY),
    Type: SENSOR_TYPE.HUMIDITY,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.BATHROOM
  };

  livingRoomTadoTemperature: UiSensor = {
    Name: 'Temperature',
    Device: DEVICE.TADO,
    Topic: 'the-verse/living-room/tado/temperature',
    SvgIcon: new BehaviorSubject<string>(ICONS.TEMPERATURE),
    Type: SENSOR_TYPE.TEMPERATURE,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.LIVING_ROOM
  };
  livingRoomTadoHumidity: UiSensor = {
    Name: 'Humidity',
    Device: DEVICE.TADO,
    Topic: 'the-verse/living-room/tado/humidity',
    SvgIcon: new BehaviorSubject<string>(ICONS.HUMIDITY),
    Type: SENSOR_TYPE.HUMIDITY,
    Value: new BehaviorSubject<string>(null),
    Room: ROOMS.LIVING_ROOM
  };
  livingRoomLightVitrine: UiSensor = {
    Name: 'Light Vitrine',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/vitrine/light',
    SvgIcon: new BehaviorSubject<string>(ICONS.LIGHTBULB_OFF),
    Type: SENSOR_TYPE.LIGHT,
    Value: new BehaviorSubject<string>(null),
    LightState: new BehaviorSubject<boolean>(false),
    Room: ROOMS.LIVING_ROOM
  };
  livingRoomLightNightStand: UiSensor = {
    Name: 'Light Nightstand',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/nightstand/light',
    SvgIcon: new BehaviorSubject<string>(ICONS.LIGHTBULB_OFF),
    Type: SENSOR_TYPE.LIGHT,
    Value: new BehaviorSubject<string>(null),
    LightState: new BehaviorSubject<boolean>(false),
    Room: ROOMS.LIVING_ROOM
  };
  allLights: UiSensor = {
    Name: 'All Lights',
    Device: DEVICE.NODEMCU,
    Topic: 'the-verse/all/light',
    SvgIcon: new BehaviorSubject<string>(ICONS.LIGHTBULB_OFF),
    Type: SENSOR_TYPE.LIGHT,
    Value: new BehaviorSubject<string>(null),
    LightState: new BehaviorSubject<boolean>(false)
  };

  private _devices: Array<UiSensor> = [
    this.kitchenLightPc,
    this.kitchenNodeMcuTemperature,
    this.kitchenNodeMmcuHumidity,
    this.kitchenTadoTemperature,
    this.kitchenTadoHumidity,
    this.livingRoomLightNightStand,
    this.livingRoomLightVitrine,
    this.livingRoomTadoTemperature,
    this.livingRoomTadoHumidity,
    this.floorNodeMcuTemperature,
    this.floorNodeMcuHumidity,
    this.bathroomTadoTemperature,
    this.bathroomTadoHumidity,
    this.allLights
  ];
  public devices: BehaviorSubject<UiSensor[]> = new BehaviorSubject(this._devices);

  constructor(private mqttService: MqttService) {
    this.sensorSubscribtions();
  }

  private sensorSubscribtions() {
    this.sensorSubscribe(this.kitchenLightPc);
    this.sensorSubscribe(this.kitchenNodeMcuTemperature);
    this.sensorSubscribe(this.kitchenNodeMmcuHumidity);
    this.sensorSubscribe(this.kitchenTadoHumidity);
    this.sensorSubscribe(this.kitchenTadoHumidity);
    this.sensorSubscribe(this.kitchenTadoTemperature);
    this.sensorSubscribe(this.livingRoomLightNightStand);
    this.sensorSubscribe(this.livingRoomLightVitrine);
    this.sensorSubscribe(this.livingRoomTadoHumidity);
    this.sensorSubscribe(this.livingRoomTadoTemperature);
    this.sensorSubscribe(this.floorNodeMcuHumidity);
    this.sensorSubscribe(this.floorNodeMcuTemperature);
    this.sensorSubscribe(this.bathroomTadoHumidity);
    this.sensorSubscribe(this.bathroomTadoTemperature);
    this.sensorSubscribe(this.allLights);
  }

  private sensorSubscribe(sensor: UiSensor) {
    this.mqttService.observe(sensor.Topic).pipe(
      map(message => message.payload.toString()),
      tap((message: string) => {
        if (!environment.production) {
          console.log(message);
        }
        sensor.Value.next(message);

        if (sensor.Type === SENSOR_TYPE.LIGHT) {
          if (message === 'on') {
            sensor.SvgIcon.next(ICONS.LIGHTBULB_ON);
            sensor.LightState.next(true);
          } else {
            sensor.SvgIcon.next(ICONS.LIGHTBULB_OFF);
            sensor.LightState.next(false);
          }
        }
      })).subscribe();
  }

  public addSensor(sensor: UiSensor) {
    this._devices.push(sensor);
    this.devices.next(this._devices);
    this.sensorSubscribe(sensor);
  }

  public lights: Observable<Array<UiSensor>> = this.devices.pipe(
    map(devices$ => devices$.filter(device => device.Type === SENSOR_TYPE.LIGHT)
  ));
  public kitchen: Observable<Array<UiSensor>> = this.devices.pipe(
    map(devices$ => devices$.filter(device => device.Room === ROOMS.KITCHEN)
  ));
  public bathroom: Observable<Array<UiSensor>> = this.devices.pipe(
    map(devices$ => devices$.filter(device => device.Room === ROOMS.BATHROOM)
  ));
  public livingroom: Observable<Array<UiSensor>> = this.devices.pipe(
    map(devices$ => devices$.filter(device => device.Room === ROOMS.LIVING_ROOM)
  ));
  public floor: Observable<Array<UiSensor>> = this.devices.pipe(
    map(devices$ => devices$.filter(device => device.Room === ROOMS.FLOOR)
  ));
}
