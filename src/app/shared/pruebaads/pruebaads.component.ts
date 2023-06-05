import { Component } from '@angular/core';
import { ConfigurationSense } from '../ads/adsense/configuration';

@Component({
  selector: 'app-pruebaads',
  templateUrl: './pruebaads.component.html',
  styleUrls: ['./pruebaads.component.scss']
})
export class PruebaadsComponent {
  config!: ConfigurationSense;
  constructor() {
    this.config = new ConfigurationSense(
      'ca-pub-9676834375313066',
      6900272380,
      'auto',
      true
    );
  }
}
