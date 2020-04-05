import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UiSensor, ICONS } from './@types';
import { DEVICE, SENSOR_TYPE } from '@smart-home-the-verse/the-halo';
import { BehaviorSubject } from 'rxjs';
import { SensorsService } from './services/sensors.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zhu Que - Red Phoenix';
  screenWidth: number;

  sensor: UiSensor = {
    Name: '',
    Device: DEVICE.NODEMCU,
    Topic: '',
    Type: SENSOR_TYPE.LIGHT,
    SvgIcon: new BehaviorSubject(ICONS.LIGHTBULB_OFF),
    Value: new BehaviorSubject('off'),
    LightState: new BehaviorSubject(false)
  };

  constructor(public dialog: MatDialog, private sensorService: SensorsService) {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
      };
  }

  openAddDeviceDialog(): void {
    const dialogRef = this.dialog.open(AddDeviceComponent, {
      width: '250px',
      data: this.sensor
    });

    dialogRef.afterClosed().subscribe((result: UiSensor) => {
      console.log(result)
      this.sensor = result;
      console.log(this.sensor);
      console.log(this.sensorService.devices);
      this.sensorService.addSensor(result);
      console.log(this.sensorService.devices);
    });
  }
}
