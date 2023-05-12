import { Component, ElementRef, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
@Component({
  selector: 'ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.scss']
})
export class AdComponent implements AfterViewInit {
  @ViewChild("divad") divad?: ElementRef;
  ngAfterViewInit() {
    this.insertScript();
  }
  public insertScript() {
    console.log("iniciando");
    let container = this.divad?.nativeElement;
    console.log(container);
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "http" + (location.protocol === "https:" ? "s" : "") + "://www.profitabledisplaynetwork.com/20f18cfbc885b1521e475ddfde4dadf3/invoke.js";
    container?.appendChild(script);
  }
}
 