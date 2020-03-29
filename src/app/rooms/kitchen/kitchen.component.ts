import { Component, OnInit } from '@angular/core';
import { RoomsService } from 'src/app/services/rooms.service';
import { Room } from '@smart-home-the-verse/the-halo';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent implements OnInit {
  room: Room;

  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.room = this.roomsService.kitchen;
  }

}
