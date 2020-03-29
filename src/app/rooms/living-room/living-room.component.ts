import { Component, OnInit } from '@angular/core';
import { Room } from '@smart-home-the-verse/the-halo';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-living-room',
  templateUrl: './living-room.component.html',
  styleUrls: ['./living-room.component.css']
})
export class LivingRoomComponent implements OnInit {
  room: Room;
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.room = this.roomsService.livingRoom;
  }

}
