import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/app/environment';
import { ConfigurationSense } from './configuration';
import { WindowWithAdsbygoogle } from './windowswithgoogle';
import { ScriptService } from 'src/app/core/script.service';
declare let window: WindowWithAdsbygoogle;
@Component({
  selector: 'adsenseinfo',
  templateUrl: './adsense.component.html',
  styleUrls: ['./adsense.component.scss']
})

export class AdsenseComponent implements AfterViewInit {
  @ViewChild("divad") divad?: ElementRef;

  @Input() config!: ConfigurationSense;
  showAd = environment.adsense.show;
  constructor(private scriptservice: ScriptService) { }

  ngAfterViewInit() {
    
      this.scriptservice.executeScript("(adsbygoogle = window.adsbygoogle || []).push({});", this.divad);
    
  }

}