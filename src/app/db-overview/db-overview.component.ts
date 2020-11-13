import { Component, OnInit } from '@angular/core';
import { QingLongService } from '../services/qing-long.service';

export interface IMqttComponent {
  topic: string;
  type: string | any;
  values?: Array<string | number | any>;
}

export interface IRoom {
  id?: number;
  name: string;
  shortname: string;
}

export interface IDevice {
  id?: number
  name: string;
  displayName: string;
  room: IRoom;
  type: IDeviceType;
  mqttComponents?: Array<IMqttComponent>;
}

export interface IDeviceType {
  name: string;
}

@Component({
  selector: 'app-db-overview',
  templateUrl: './db-overview.component.html',
  styleUrls: ['./db-overview.component.css']
})
export class DbOverviewComponent implements OnInit {
  rooms: Array<IRoom>;
  devices: Array<IDevice>;
  mqttComponents: Array<IMqttComponent>;

  constructor(private qingLongService: QingLongService) {
    this.qingLongService.getRooms().subscribe((rooms: any) => {
      this.rooms = rooms;
    });
    this.qingLongService.getDevices().subscribe((devices: any) => {
      this.devices = devices;
    });
    this.qingLongService.getMqttComponents().subscribe((mqttComponents: any) => {
      this.mqttComponents = mqttComponents;
    });
  }

  ngOnInit(): void {
  }

}
