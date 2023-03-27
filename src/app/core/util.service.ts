import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  constructor() {

  }
  public getparameter(este: string) {
    let hash:string=window.location.hash;
    hash=hash.replace("#/","");
    const urlParams = new URLSearchParams(hash);
    let resul:any=urlParams.get(este);
    return resul==null?"":resul;
  }
}
