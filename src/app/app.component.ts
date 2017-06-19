import { Component } from '@angular/core';

@Component({
  selector: 'dir-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dir';

  private switch: boolean = true;
  onSwitch() {
    this.switch = !this.switch;
  }

  private items = [1,2,3,4,5];


private value= 10000;
}

