import { Injectable } from '@angular/core';
import * as rs from 'jsrsasign';

@Injectable({
  providedIn: 'root'
})
export class LlaveService {
  llavepub: string;
  constructor() {
    this.llavepub = `-----BEGIN PUBLIC KEY-----
    MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAypd3372FerYwxCcZyDyu
    8oNbEPHTl16DmPbjYpvHemzhg/UtvM5hQuIfqmQ/ykorTfxBw9qw2LkNfgKfcM2J
    jPOCiRb6GSQscKCWDeNzcgAWolJoKrzBibm3FDasdd2kM9aFkTX+bTdudsU40821
    YoWywSPnauMHIk5i6Eipps5BZwVrIjdbAPQprGglSYvX/Nd87sgcRJfRNS3D9jqG
    WtNG4qv9fPTCfVd5qPTJBThgjs3uDhhGhJ1UCYjIyRCTTaKtZR3+PJ2LhTulkOfm
    JsF94PEVHszSsWWk//Zly1+RbjcD86MbJ5L26Bn/nkLNmdz5M5izAimM2CcsB3Rs
    fQIDAQAB
    -----END PUBLIC KEY-----`;

  }
  public valid(jwt: string) {
    return this.validJwt(jwt, this.llavepub);
  }
  public validJwt(jwt: string, key: string) {
    var publicKey = key;
    var token = jwt;
   
    var isValid = rs.KJUR.jws.JWS.verify(token, publicKey, ['RS256']);
    if (isValid) {
      return true;
    } else {
      return false;
    }
  }
}
