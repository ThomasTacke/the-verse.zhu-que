import { Component, OnInit } from '@angular/core';
import { MqttHandlerService, Room } from '../service/mqtt-handler.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  title = 'Kitchen';
  kitchen: Room;

  constructor(private mqttHandlerService: MqttHandlerService) { }

  ngOnInit(): void {
    this.kitchen = this.mqttHandlerService.kitchen;
  }

}
