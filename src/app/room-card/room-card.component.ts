import { Component, OnInit, Input } from '@angular/core';
import { Room } from '@smart-home-the-verse/the-halo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-card',
  templateUrl: './room-card.component.html',
  styleUrls: ['./room-card.component.css']
})
export class RoomCardComponent implements OnInit {
  @Input() room: Room;
  constructor() { }

  ngOnInit(): void { }

}
