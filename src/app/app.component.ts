import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Zhu Que - Red Phoenix';
  screenWidth: number;

  constructor() {
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        this.screenWidth = window.innerWidth;
      };
  }
}
