import { Component } from '@angular/core';
import data from './sitios.json';
import { Buffer } from 'buffer';
import { UtilService } from '../core/util.service';

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
  constructor(private util: UtilService) {
    this.link = Buffer.from(util.getparameter('link'), 'base64').toString();
    const host = new URL(this.link);
    let hostlink: string;
    hostlink = host.hostname;
    let esta: boolean;
    esta = false;

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
      window.location.href = this.link;
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
