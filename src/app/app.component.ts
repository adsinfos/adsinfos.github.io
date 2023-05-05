import { Component } from '@angular/core';
import { TipoService } from './core/tipo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adinfo';
  opcion: string = "";
  constructor(private tipo: TipoService) {
    const url = window.location.href;
    const hasnewFormat = url.includes('/#/');
    if (!hasnewFormat) {
      const newUrl = url.replace('/?', '/#/?');
      if (newUrl != url) {
        window.location.href = newUrl;
      }
    }
    tipo.opcion = 'home';
  }
  public ima() {
    return this.tipo.image;
  }
  public wid() {
    return this.tipo.wid;
  }
  public hei() {
    return this.tipo.hei;
  }
  public nohay() {
    return this.tipo.image=="completo";
  }
  public carga(pagina: string) {
    this.opcion = pagina;
    let url = document.getElementById(this.opcion) as HTMLAnchorElement;
    let home = document.getElementById("home") as HTMLAnchorElement;
    let about = document.getElementById("acerca") as HTMLAnchorElement;
    let links = document.getElementById("links") as HTMLAnchorElement;
    let sicoes = document.getElementById("infosicoes") as HTMLAnchorElement;
    let tipos = document.getElementById("tipos") as HTMLAnchorElement;
    let monitor = document.getElementById("monitor") as HTMLAnchorElement;
    home.className = "nav-link text-white";
    about.className = "nav-link text-white";
    links.className = "nav-link text-white";
    sicoes.className = "nav-link text-white";
    tipos.className = "nav-link text-white";
    monitor.className = "nav-link text-white";
    url.className = "nav-link active text-white";
    this.tipo.opcion = this.opcion;
  }

  toggleNavbar(navbar: any) {
    navbar.toggle();
  }
}
