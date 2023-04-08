import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private tipo: string = "";
  private aux: string = "";
  private ima: string = "";
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
