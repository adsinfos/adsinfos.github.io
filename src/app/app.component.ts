import { Component } from '@angular/core';
import { TipoService } from './core/tipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adinfo';
  constructor(private tipo: TipoService) {
    const url = window.location.href;
    const hasnewFormat = url.includes('/#/');
    if (!hasnewFormat) {
      const newUrl = url.replace('/?', '/#/?');
      if (newUrl != url) {
        window.location.href = newUrl;
      }
    }

  }
  public ima() {
    return this.tipo.image;
  }
}
