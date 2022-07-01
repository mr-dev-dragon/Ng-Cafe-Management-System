import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  D = "";
  B = "A";
  GETCAL() {
    this.D = this.B;
  }
}
