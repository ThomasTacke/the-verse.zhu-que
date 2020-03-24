import { Component, OnInit } from '@angular/core';
import { MqttHandlerService, Room } from '../service/mqtt-handler.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  title = 'Floor';
  floor: Room;

  constructor(private mqttHandlerService: MqttHandlerService) { }

  ngOnInit(): void {
    this.floor = this.mqttHandlerService.floor;
  }

}
