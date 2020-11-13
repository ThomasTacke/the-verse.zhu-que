import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddDeviceComponent } from './add-device/add-device.component';
import { UiSensor, ICONS } from './@types';
import { DEVICE, SENSOR_TYPE } from '@smart-home-the-verse/the-halo';
import { BehaviorSubject } from 'rxjs';
import { SensorsService } from './services/sensors.service';
import { QingLongService } from './services/qing-long.service';
import { AddRoomComponent } from './add-room/add-room.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zhu Que - Red Phoenix';
  screenWidth: number;
  rooms: Array<any>;
  room: {
    name: string,
    shortname: string
  } = {
      name: '',
      shortname: ''
    }

  sensor: UiSensor = {
    Name: '',
    Device: DEVICE.NODEMCU,
    Topic: '',
    Type: SENSOR_TYPE.LIGHT,
    SvgIcon: new BehaviorSubject(ICONS.LIGHTBULB_OFF),
    Value: new BehaviorSubject('off'),
    LightState: new BehaviorSubject(false)
  };

  constructor(public dialog: MatDialog,
    private sensorService: SensorsService,
    private qingLongService: QingLongService,
  ) {
    this.screenWidth = window.innerWidth;
    window.onresize = () => {
      this.screenWidth = window.innerWidth;
    };
    this.qingLongService.getRooms().subscribe((rooms: any) => {
      this.rooms = rooms.rooms;
    });
  }

  openAddDeviceDialog(): void {
    const dialogRef = this.dialog.open(AddDeviceComponent, {
      width: '250px',
      data: this.sensor
    });

    dialogRef.afterClosed().subscribe((result: UiSensor) => {
      console.log(result)
      if (result) {
        this.sensor = result;
        console.log(this.sensor);
        console.log(this.sensorService.devices);
        this.sensorService.addSensor(result);
        console.log(this.sensorService.devices);
      }
    });
  }

  openAddRoomDialog(): void {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '250px',
      data: this.room
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      console.log(result);
      if (result) {
        this.qingLongService.setRoom(result).subscribe((result: any) => {
          console.log(result);
          this.rooms.push(result);
        });
      }
    });
  }
}
