import { Component, HostListener } from '@angular/core';
import { TipoService } from 'src/app/core/tipo.service';
import { Buffer } from 'buffer';
import { SenseConfiguration } from '../ads/sense/config/sense.configuration';

@Component({
  selector: 'app-contratacion',
  templateUrl: './contratacion.component.html',
  styleUrls: ['./contratacion.component.scss']
})
export class ContratacionComponent {
  contrata: any;
  idunico: string = "";
  count: number = 0;
  showInferior: boolean = true;
  showInferior2: boolean = true;
  showSuperior: boolean = true;
  intervalId: any;
  public config: any;
  public config2: any;
  
  constructor(private tipo: TipoService) {
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
    this.config2.dataadqlayoutkey = "-gm-d+x-3h+7r";
    this.config2.style = "display:block";
  }
  private ngOnInit() {
    let data: string = this.tipo.getAux();

    if (data != "") {
      let jwtpartido: string[] = data.split(".");
      let base: string = Buffer.from(jwtpartido[1], 'base64').toString("utf8");
      let json: any = JSON.parse(base);
      this.contrata = JSON.parse(json.v);
      let cucepartido: string[] = this.contrata.cuce.split("-");
      this.idunico = cucepartido[3];
    } else {
      window.history.back();
    }
    this.intervalId = setInterval(() => {
      this.count++;
      if (this.count % 3 == 0) {
        this.refreshDivs();
      }
    }, 1000);

  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  ir() {
    window.location.href = "https://convocatorias.adsinfo.me";
  }
  regresar() {
    clearInterval(this.intervalId);
    window.history.back();
  }
  public refreshDivs() {
    console.log("refrescando divs");
    this.showInferior = false;
    this.showInferior2 = false;
    this.showSuperior = false;
    setTimeout(() => {
      this.showInferior = false;
      this.showInferior2= false;
      this.showSuperior = true;
    });

  }
}
