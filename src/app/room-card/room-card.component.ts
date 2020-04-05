import { Component, OnInit, Input } from '@angular/core';
import { UiRoom } from '../@types';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  @Input() room: UiRoom;

  constructor() { }

  ngOnInit(): void {
  }

}
