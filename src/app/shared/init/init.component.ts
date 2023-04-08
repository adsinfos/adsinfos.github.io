import { Component } from '@angular/core';
import data from './sitios.json';
import { Buffer } from 'buffer';
import { UtilService } from '../../core/util.service';
import { TipoService } from 'src/app/core/tipo.service';
import { LlaveService } from 'src/app/core/llave.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss']
})
export class InitComponent {
  texto: string = "";
  link: string = "";
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
  alterdata: string = "";
  altertipo: any = "";


  constructor(private route: ActivatedRoute, location: Location, private router: Router, private util: UtilService, private tipo: TipoService, private llave: LlaveService) {
    this.alterdata = this.route.snapshot.paramMap.get('data') ?? "";
    this.altertipo = this.route.snapshot.paramMap.get('tipo') ?? "";
    this.ti = util.getparameter('ti');
    this.link = util.getparameter('link');
    if (this.ti === "" && this.link === "") {
      this.link = this.alterdata;
      this.ti = this.altertipo;
    }
    if (this.ti === "" || this.ti == null) {
      this.link = Buffer.from(this.link, 'base64').toString();
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
        tipo.image = "links";
        tipo.wid = "284";
        tipo.hei = "96";
      } else {
        this.disable = true;
        this.texto = "No se envio link";
        this.nohay = true;
        this.validos();
        tipo.image = "completo";
        tipo.wid = "300";
        tipo.hei = "130";
      }

    } else if (this.ti === "2") {
      let data: string = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
      let ti: string = this.ti;

      if (llave.valid(data)) {
        this.texto = "Ver los datos";
        this.disable = false;
        this.hostin = "ver datos Sicoes";
        this.link = "/#/contratacion";
        tipo.setTipo(ti);
        tipo.setAux(data);
      } else {
        this.texto = "Datos no validos";
        this.disable = true;
        this.hostin = "DAtos no validos";
        this.link = "/#/error";
        tipo.setTipo("");
        tipo.setAux("");
      }
      tipo.image = "info";
      tipo.wid = "284";
      tipo.hei = "96";
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
        if (this.count % 5 == 0) {
          this.refreshDivs();
        }
      }, 1000);
    } else if (this.tipo.getTipo() == "2") {
      this.router.navigate(['/contratacion']);
    } else {
      window.location.href = this.link != null ? this.link : '';
    }
  }
  public clicklink(link: string) {
    window.open(link, "_blank");
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
  public resto() {
    return this.maximo - this.count;
  }

}
