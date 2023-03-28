import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adinfo';
  constructor() {
    const url = window.location.href;
    const hasnewFormat = url.includes('/#/');
    if (!hasnewFormat) {
      const newUrl = url.replace('/?', '/#/?');
      if (newUrl != url) {
        window.location.href = newUrl;
      }
    }

  }
}
