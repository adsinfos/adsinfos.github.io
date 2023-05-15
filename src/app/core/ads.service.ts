import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdsService {

  constructor(
  ) { }

  public loadJsScript(renderer: Renderer2, src: string, componente: any): HTMLScriptElement {
    const script = renderer.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    renderer.appendChild(componente, script);
    return script;
  }
}
