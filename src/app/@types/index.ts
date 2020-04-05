import { Sensor, TemperatureSensor } from '@smart-home-the-verse/the-halo';
import { BehaviorSubject, Observable } from 'rxjs';

export const enum ICONS {
  TEMPERATURE = 'thermometer',
  HUMIDITY = 'water-percent',
  LIGHTBULB_ON = 'lightbulb-on',
  LIGHTBULB_OFF = 'lightbulb'
}

export const enum ROOMS {
  KITCHEN = 'Kitchen',
  BATHROOM = 'Bathroom',
  LIVING_ROOM = 'Living Room',
  FLOOR = 'Floor',
}

export interface UiSensor<T = any> extends Sensor<T> {
  SvgIcon: BehaviorSubject<string>;
  LightState?: BehaviorSubject<boolean>;
  Room?: ROOMS;
  Value?: BehaviorSubject<T>;
}

export interface UiRoom {
  Name: string;
  Sensors: Observable<Array<UiSensor>>;
  // Sensors: Array<UiSensor>;
}

export type UiTemperatureSensor = UiSensor & TemperatureSensor;
