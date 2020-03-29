import { Component, OnInit } from '@angular/core';
import { Room } from '@smart-home-the-verse/the-halo';
import { RoomsService } from 'src/app/services/rooms.service';

@Component({
  selector: 'app-bathroom',
  templateUrl: './bathroom.component.html',
  styleUrls: ['./bathroom.component.css']
})
export class BathroomComponent implements OnInit {
  room: Room;
  constructor(private roomsService: RoomsService) { }

  ngOnInit(): void {
    this.room = this.roomsService.bathroom;
  }

}
