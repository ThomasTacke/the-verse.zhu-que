import { Component, OnInit } from '@angular/core';
import { Room } from '@smart-home-the-verse/the-halo';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-floor',
  templateUrl: './floor.component.html',
  styleUrls: ['./floor.component.css']
})
export class FloorComponent implements OnInit {
  room: Room;
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.room = this.roomsService.floor;
  }

}
