import { Component, HostListener } from '@angular/core';
import { TipoService } from 'src/app/core/tipo.service';
import { Buffer } from 'buffer';
import { SenseConfiguration } from '../ads/sense/config/sense.configuration';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import htmlToPdfmake from 'html-to-pdfmake';
import { UtilService } from 'src/app/core/util.service';
import { Content, ContentTable, Table } from 'pdfmake/interfaces';

@Component({
  selector: 'app-convocatoriachile',
  templateUrl: './convocatoriachile.component.html',
  styleUrls: ['./convocatoriachile.component.scss']
})
export class ConvocatoriachileComponent {
  contrata: any;
  idunico: string = "";
  count: number = 0;
  showInferior: boolean = true;
  showInferior2: boolean = true;
  showSuperior: boolean = true;
  mostrarimagen: boolean = true;

  intervalId: any;
  public config: any;
  public config2: any;
  public configm: any;

  constructor(private tipo: TipoService, public util: UtilService) {
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
  private ngOnInit() {
    let data: string = this.tipo.getAux();

    if (data != "") {
      let jwtpartido: string[] = data.split(".");
      let base: string = Buffer.from(jwtpartido[1], 'base64').toString("utf8");
      let json: any = JSON.parse(base);
      this.contrata = JSON.parse(json.v);
    } else {
      window.history.back();
    }
    this.intervalId = setInterval(() => {
      this.count++;
    
    }, 1000);

  }
  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
  ir() {
    window.location.href = "https://convocatorias.infobots.org";
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
      this.showInferior = true;
      this.showInferior2 = true;
      this.showSuperior = true;
    });

  }
  public muestra(fecha: string) {
    let arr = fecha.split("/");
    let fech = new Date(Number.parseInt(arr[2]), Number.parseInt(arr[1]) - 1, Number.parseInt(arr[0]));
    let ahora = new Date();
    if (ahora < fech) {
      return "vigente";
    } else {
      return "vencido";
    }
  }
  public linkcito() {
    return this.tipo.link;
  }
  public pdf() {
    this.mostrarimagen = false;
    setTimeout(() => {
      let tabla = document.getElementById("tabla")?.innerHTML ?? "";
      let html: any = htmlToPdfmake(tabla) as Content;
      html[1].table.widths = [100, 400];
      const documentDefinition = { content: html };
      pdfMake.createPdf(documentDefinition).download();
      this.mostrarimagen = true;
    });

  }
}
