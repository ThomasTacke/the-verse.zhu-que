import { Component, OnInit, Input } from '@angular/core';
import { UiSensor } from '../@types';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { MqttService } from 'ngx-mqtt';
import { SENSOR_TYPE } from '@smart-home-the-verse/the-halo';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.css']
})
export class SensorCardComponent implements OnInit {
  @Input() sensor: UiSensor;
  type: SENSOR_TYPE;
  slider: boolean;

  constructor(private mqttService: MqttService) { }

  ngOnInit(): void {
    this.type = SENSOR_TYPE.LIGHT;
  }

  sliderChange(event: MatSlideToggleChange) {
    this.sensor.LightState.next(event.checked);
    event.checked ? this.mqttService.unsafePublish(this.sensor.Topic, 'on', { qos: 0, retain: true }) :
                    this.mqttService.unsafePublish(this.sensor.Topic, 'off', { qos: 0, retain: true });
  }

}
