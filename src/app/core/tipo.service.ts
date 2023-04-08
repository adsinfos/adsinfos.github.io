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
