import { Component, Inject } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UiSensor } from '../@types';

@Component({
  selector: 'app-add-device',
  templateUrl: './add-device.component.html',
  styleUrls: ['./add-device.component.css']
})
export class AddDeviceComponent {

  constructor(public dialogRef: MatDialogRef<AddDeviceComponent>, @Inject(MAT_DIALOG_DATA) public sensor: UiSensor) { }

  myControl = new FormControl();

  onNoClick(): void {
    this.dialogRef.close();
  }
}
