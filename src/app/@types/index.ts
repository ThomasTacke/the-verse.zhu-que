import { Sensor, TemperatureSensor, Room } from '@smart-home-the-verse/the-halo';
import { BehaviorSubject } from 'rxjs';

export const enum ICONS {
  TEMPERATURE = 'thermometer',
  HUMIDITY = 'water-percent',
  LIGHTBULB_ON = 'lightbulb-on',
  LIGHTBULB_OFF = 'lightbulb'
}

export interface UiSensor<T = any> extends Sensor<T> {
  SvgIcon: BehaviorSubject<string>;
  LightState?: BehaviorSubject<boolean>;
  Value?: BehaviorSubject<T>;
}

export interface UiRoom extends Room {
  Sensors: Array<UiSensor>;
}

export type UiTemperatureSensor = UiSensor & TemperatureSensor;
