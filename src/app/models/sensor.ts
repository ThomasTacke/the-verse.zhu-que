import { IMqttMessage } from 'ngx-mqtt';
import { Observable } from 'rxjs';

export class Sensor {
  constructor(
    public name: string,
    public value: Observable<IMqttMessage>,
    public svgIcon?: string,
  ) { }
}
