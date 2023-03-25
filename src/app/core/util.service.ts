import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {

  }
  public getparameter(este: string) {
    const urlParams = new URLSearchParams(window.location.search);
    let resul:any=urlParams.get(este);
    return resul==null?"":resul;
  }
}
