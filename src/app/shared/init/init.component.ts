import { Component } from '@angular/core';
import data from './sitios.json';
import { Buffer } from 'buffer';
import { UtilService } from '../../core/util.service';
import { TipoService } from 'src/app/core/tipo.service';
import { LlaveService } from 'src/app/core/llave.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent {
  texto: string = "";
  link: string | null = "";
  disable: boolean = false;
  count: number = 0;
  readyLink: boolean = false;
  hostin: string = "";
  showInferior: boolean = true;
  showSuperior: boolean = true;
  maximo: number = 30;
  cuando: boolean = false;

  hostsvalidos: string = "";
  nohay: boolean = false;
  ti: string = "";

  constructor(private util: UtilService, private tipo: TipoService, private llave: LlaveService) {
    this.ti = util.getparameter('ti');
    if (this.ti === "") {
      this.link = Buffer.from(util.getparameter('link'), 'base64').toString();


      let host: any;
      let mandaron: boolean;
      try {
        host = new URL(this.link == null ? "" : this.link);
        mandaron = true;
      } catch (ex) {
        mandaron = false;
      }
      if (mandaron) {
        this.nohay = false;
        let hostlink: string;
        hostlink = host.hostname;
        let esta: boolean;
        esta = false;
        hostlink = hostlink.replace("www.", "");
        for (let i = 0; i < data.lista.length; i++) {
          if (data.lista[i].host == hostlink) {
            esta = true;
          }
        }
        if (esta == false) {
          this.link = "NO PERMITIDO";
        } else {
          this.hostin = hostlink;
        }

        this.texto = "Entrar a link";
      } else {
        this.disable = true;
        this.texto = "No se envio link";
        this.nohay = true;
        this.validos();
      }
    } else if (this.ti === "2") {
      let data: string = util.getparameter('data');
      console.log(data);
      console.log(llave.valid(data));

    }
  }
  public validos() {
    this.hostsvalidos = "";
    for (let i = 0; i < data.lista.length; i++) {
      this.hostsvalidos = this.hostsvalidos + data.lista[i].site + ",";
    }
    this.hostsvalidos.substring(0, this.hostsvalidos.length - 1);
  }
  public click() {
    if (!this.readyLink) {
      this.disable = true;
      const intervalId = setInterval(() => {
        this.count++;
        this.cuando = true;
        if (this.count === this.maximo) {
          clearInterval(intervalId);
          this.disable = false;
          this.count = 0;
          this.readyLink = true;
          this.texto = "Ir a " + this.hostin;
          this.cuando = false;
        }
        if (this.maximo % this.count) {
          this.refreshDivs();
        }
      }, 1000);
    } else {
      window.location.href = this.link != null ? this.link : '';
    }
  }
  public refreshDivs() {
    this.showInferior = false;
    this.showSuperior = false;
    setTimeout(() => {
      this.showInferior = true;
      this.showSuperior = true;
    });

  }
  public resto() {
    return this.maximo - this.count;
  }

}
