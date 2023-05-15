import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, Renderer2, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { AdsService } from 'src/app/core/ads.service';
@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements AfterViewInit {
  @ViewChild("divad") divad?: ElementRef;
  @Input() tipo!: number;
  atOptions: any = {};
  constructor(
    private adsservice: AdsService,
    @Inject(DOCUMENT) private document: Document,
    private renderer: Renderer2
  ) {

  }
  ngAfterViewInit() {
    let time: number = 0;
    time = this.getRandomMultipleOf20();
    setTimeout(() => { this.insertScript(); }, time);
    //this.insertScript();
  }
  public insertScript() {
    console.log("entrando");
    let url = "";
    if (this.tipo == 1) {
      globalThis.atOptions = {
        'key': '20f18cfbc885b1521e475ddfde4dadf3',
        'format': 'iframe',
        'height': 250,
        'width': 300,
        'params': {}
      };
      url = "http" + (location.protocol === "https:" ? "s" : "") + "://www.profitabledisplaynetwork.com/20f18cfbc885b1521e475ddfde4dadf3/invoke.js";
    } else if (this.tipo == 2) {
      globalThis.atOptions = {
        'key': '66459a45745efd42dee87fbe4de0e845',
        'format': 'iframe',
        'height': 60,
        'width': 468,
        'params': {}
      };
      url = "http" + (location.protocol === "https:" ? "s" : "") + "://www.profitabledisplaynetwork.com/66459a45745efd42dee87fbe4de0e845/invoke.js";
    } else if (this.tipo == 3) {
      globalThis.atOptions = {
        'key': '4bfced7858cd393e13d770a82fe5fc1d',
        'format': 'iframe',
        'height': 50,
        'width': 320,
        'params': {}
      };
      url = "http" + (location.protocol === "https:" ? "s" : "") + "://www.profitabledisplaynetwork.com/4bfced7858cd393e13d770a82fe5fc1d/invoke.js";
    }
    let container = this.divad?.nativeElement;
    const scriptElement = this.adsservice.loadJsScript(this.renderer, url, container);
    console.log("terminado");
  }
  public getRandomMultipleOf20(): number {
    // Generar un número entero aleatorio entre 0 y 100
    let random = Math.floor(Math.random() * 101);
    // Multiplicar por 20 para obtener un múltiplo de 20
    let multiple = random * 20;
    // Devolver el resultado
    return multiple;
  }
}
