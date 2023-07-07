import { Component } from '@angular/core';
import data from './sitios.json';
import { Buffer } from 'buffer';
import { UtilService } from '../../core/util.service';
import { TipoService } from 'src/app/core/tipo.service';
import { LlaveService } from 'src/app/core/llave.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { SenseConfiguration } from '../ads/sense/config/sense.configuration';

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
  maximo: number = 15;
  cuando: boolean = false;

  hostsvalidos: string = "";
  nohay: boolean = false;
  ti: string = "";
  alterdata: string = "";
  altertipo: any = "";
  public config: any;
  public config2: any;
  public configm: any;


  constructor(private route: ActivatedRoute, location: Location, private router: Router, private util: UtilService, public tipo: TipoService, private llave: LlaveService) {
    this.config = {} as SenseConfiguration;

    this.config.tipo = "display";
    this.config.dataadclient = "ca-pub-9676834375313066";
    this.config.dataadformat = "auto";
    this.config.dataadslot = "6900272380";
    this.config.datafullwidthresponsive = "true";
    this.config.style = "display:block";

    this.configm = {} as SenseConfiguration;

    this.configm.tipo = "multiple";
    this.configm.dataadclient = "ca-pub-9676834375313066";
    this.configm.dataadformat = "autorelaxed";
    this.configm.dataadslot = "8756238946";
    this.configm.style = "display:block";

    this.config2 = {} as SenseConfiguration;
    this.config2.tipo = "infeed";
    this.config2.dataadclient = "ca-pub-9676834375313066";
    this.config2.dataadformat = "fluid";
    this.config2.dataadslot = "2686529353";
    this.config2.dataadqlayoutkey = "-gc-v+5r-7l-18";
    this.config2.style = "display:block";

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
        tipo.image = "completo";
        this.nohay = true;
        window.location.href = "http://homecito.adsinfo.me";
      }

    } else if (this.ti === "2") {
      let data: string = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
      let ti: string = this.ti;

      if (llave.valid(data)) {
        this.texto = "Ver los datos del SICOES";
        this.disable = false;
        this.hostin = "ver datos Sicoes";
        this.link = "/#/contratacion";
        tipo.setTipo(ti);
        tipo.setAux(data);
        tipo.link = window.location.href;
      } else {
        this.texto = "Datos no validos";
        this.disable = true;
        this.hostin = "DAtos no validos";
        this.link = "/#/error";
        tipo.setTipo("");
        tipo.setAux("");
      }
      tipo.image = "sicoes";
      tipo.wid = "284";
      tipo.hei = "96";
    } else if (this.ti === "3") {
      let data: string = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
      let ti: string = this.ti;

      if (llave.valid(data)) {
        this.texto = "Ver los datos de las divisas";
        this.disable = false;
        this.hostin = "ver datos Divisas";
        this.link = "/#/tipos";
        tipo.setTipo(ti);
        tipo.setAux(data);
      } else {
        this.texto = "Datos no validos";
        this.disable = true;
        this.hostin = "Datos no validos";
        this.link = "/#/error";
        tipo.setTipo("");
        tipo.setAux("");
      }
      tipo.image = "tipos";
      tipo.wid = "284";
      tipo.hei = "96";
    } else if (this.ti === "4") {
      let data: string = util.getparameter('data') === "" ? this.alterdata : util.getparameter('data');
      let ti: string = this.ti;

      if (llave.valid(data)) {
        this.texto = "Ver monitoreo";
        this.disable = false;
        this.hostin = "ver monitoreo de Sistemas";
        this.link = "/#/monitor";
        tipo.setTipo(ti);
        tipo.setAux(data);
      } else {
        this.texto = "Datos no validos";
        this.disable = true;
        this.hostin = "Datos no validos";
        this.link = "/#/error";
        tipo.setTipo("");
        tipo.setAux("");
      }
      tipo.image = "monitor";
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
      this.cuando = true;

      const intervalId = setInterval(() => {
        this.count++;
        if (this.count === this.maximo) {
          //clearInterval(intervalId);
          this.disable = false;
          //this.count = 0;
          this.readyLink = true;
          this.texto = "Ir a " + this.hostin;
          this.cuando = false;
        }
        if (this.count % 3 == 0) {
          this.refreshDivs();
        }
      }, 1000);
    } else if (this.tipo.getTipo() == "2") {
      this.router.navigate(['/contratacion']);
    } else if (this.tipo.getTipo() == "3") {
      this.router.navigate(['/tipos']);
    } else if (this.tipo.getTipo() == "4") {
      this.router.navigate(['/monitor']);
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
  public ir(url: string) {
    window.location.href = url;
  }
}
