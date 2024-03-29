import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private tipo: string = "";
  private aux: string = "";
  private ima: string = "";
  private _wid: string = "";
  private _hei: string = "";
  private _opcion: string = "";
  private _link: string = "";
  public motorad(): string {
    if (this.tipo == "2" || this.tipo == "5" || this.tipo == "6") {
      return "google";
    } else {
      return "adsterra";
    }
  }
  public get link(): string {
    return this._link;
  }
  public set link(value: string) {
    this._link = value;
  }

  public get opcion(): string {
    return this._opcion;
  }
  public set opcion(value: string) {
    this._opcion = value;
  }

  public get wid(): string {
    return this._wid;
  }
  public set wid(value: string) {
    this._wid = value;
  }
  public get hei(): string {
    return this._hei;
  }
  public set hei(value: string) {
    this._hei = value;
  }

  public get image(): string {
    return this.ima;
  }
  public set image(value: string) {
    this.ima = value;
  }
  constructor() { }
  public getTipo(): string {
    return this.tipo;
  }
  public setTipo(tipo: string) {
    this.tipo = tipo;
  }
  public getAux(): string {
    return this.aux;
  }
  public setAux(aux: string) {
    this.aux = aux;
  }
}
