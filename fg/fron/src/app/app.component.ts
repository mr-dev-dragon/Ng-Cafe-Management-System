import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isDarkTheme = true;
  btnnn() {
    if (this.isDarkTheme) {
      this.isDarkTheme = !this.isDarkTheme;
    }

  }
}
