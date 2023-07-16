import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvocatoriachileComponent } from './convocatoriachile.component';

describe('ConvocatoriachileComponent', () => {
  let component: ConvocatoriachileComponent;
  let fixture: ComponentFixture<ConvocatoriachileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvocatoriachileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvocatoriachileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
