import { Component, HostListener } from '@angular/core';
import { TipoService } from 'src/app/core/tipo.service';
import { Buffer } from 'buffer';

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
  showSuperior: boolean = true;
  intervalId: any;
  constructor(private tipo: TipoService) {

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
      if (this.count % 8 == 0) {
        this.refreshDivs();
      }
    }, 1000);

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
}