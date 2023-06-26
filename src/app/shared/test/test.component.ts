import { Component } from '@angular/core';
import { TipoService } from 'src/app/core/tipo.service';
import { SenseConfiguration } from '../ads/sense/config/sense.configuration';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  public config: any;
  public config2: any;
  constructor(private tipo: TipoService) {
    this.tipo.image = 'completo';
    this.tipo.wid = '100';
    this.tipo.hei = '60';
    this.config = {} as SenseConfiguration;

    this.config.tipo = "display";
    this.config.dataadclient = "ca-pub-9676834375313066";
    this.config.dataadformat = "auto";
    this.config.dataadslot = "6900272380";
    this.config.datafullwidthresponsive = "true";
    this.config.style = "display:block";   
    
    this.config2 = {} as SenseConfiguration;
    this.config2.tipo = "infeed";
    this.config2.dataadclient = "ca-pub-9676834375313066";
    this.config2.dataadformat = "fluid";
    this.config2.dataadslot = "2686529353";
    this.config2.dataadqlayoutkey = "-gc-v+5r-7l-18";
    this.config2.style = "display:block";
  }
}
