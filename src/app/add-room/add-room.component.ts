import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent {

  constructor(public dialogRef: MatDialogRef<AddRoomComponent>, @Inject(MAT_DIALOG_DATA) public room: {
    name: string,
    shortname: string
  }) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
