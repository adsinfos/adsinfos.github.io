import { Component } from '@angular/core';
import { TipoService } from 'src/app/core/tipo.service';
import { SenseConfiguration } from '../ads/sense/config/sense.configuration';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-contactoanuncio',
  templateUrl: './contactoanuncio.component.html',
  styleUrls: ['./contactoanuncio.component.scss']
})
export class ContactoanuncioComponent {
  showInferior: boolean = true;
  showSuperior: boolean = true;
  intervalId: any;
  count: number = 0;
  contacto: any;
  public config: any;
  public config2: any;
  public configm: any;

  constructor(private tipo: TipoService) {
    this.configm = {} as SenseConfiguration;

    this.configm.tipo = "multiple";
    this.configm.dataadclient = "ca-pub-9676834375313066";
    this.configm.dataadformat = "autorelaxed";
    this.configm.dataadslot = "8756238946";
    this.configm.style = "display:block";

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
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  regresar() {
    clearInterval(this.intervalId);
    window.history.back();
  }

  public refreshDivs() {
    console.log("refrescando divs");
    this.showInferior = false;
    this.showSuperior = false;
    setTimeout(() => {
      this.showInferior = true;
      this.showSuperior = true;
    });

  }
  private ngOnInit() {
    let data: string = this.tipo.getAux();

    if (data != "") {
      let jwtpartido: string[] = data.split(".");
      let base: string = Buffer.from(jwtpartido[1], 'base64').toString("utf8");
      let json: any = JSON.parse(base);
      console.log(JSON.parse(json.v));
      this.contacto = JSON.parse(json.v);

    } else {
      window.history.back();
    }
    this.intervalId = setInterval(() => {
      this.count++;
      if (this.count % 8 == 0) {
        this.refreshDivs();
      }
    }, 1000);

  }
}
