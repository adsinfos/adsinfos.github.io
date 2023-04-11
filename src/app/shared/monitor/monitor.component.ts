import { Component } from '@angular/core';
import { TipoService } from 'src/app/core/tipo.service';
import { Buffer } from 'buffer';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.scss']
})
export class MonitorComponent {
  showInferior: boolean = true;
  showSuperior: boolean = true;
  intervalId: any;
  count: number = 0;
  divisas: any;

  regresar() {
    clearInterval(this.intervalId);
    window.history.back();
  }
  constructor(private tipo: TipoService) {

  }
  private ngOnInit() {
    let data: string = this.tipo.getAux();

    if (data != "") {
      let jwtpartido: string[] = data.split(".");
      let base: string = Buffer.from(jwtpartido[1], 'base64').toString("utf8");
      let json: any = JSON.parse(base);
      this.divisas = JSON.parse(json.v);

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
  public refreshDivs() {
    console.log("refrescando divs");
    this.showInferior = false;
    this.showSuperior = false;
    setTimeout(() => {
      this.showInferior = true;
      this.showSuperior = true;
    });

  }
  public getNombre(valor: string) {
    let arr = valor.split("|");
    let resul = arr[0] + " " + arr[1] + " " + arr[2];
    return resul;
  }
  public getValor(valor: string) {
    let arr = valor.split("|");
    let resul = arr[3];
    let resul2 = arr[4];
    let total = resul;
    if (resul === "") {
      total = resul2;
    }
    return total;
  }
}
