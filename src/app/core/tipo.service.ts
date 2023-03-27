import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipoService {
  private tipo: string = "";
  private aux: string = "";
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
