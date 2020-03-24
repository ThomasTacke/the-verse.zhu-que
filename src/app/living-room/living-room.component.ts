import { Component, OnInit } from '@angular/core';
import { MqttHandlerService, Room } from '../service/mqtt-handler.service';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent implements OnInit {
  title = 'Living Room';
  livingRoom: Room;

  constructor(private mqttHandlerService: MqttHandlerService) { }

  ngOnInit(): void {
    this.livingRoom = this.mqttHandlerService.livingRoom;
  }

}
