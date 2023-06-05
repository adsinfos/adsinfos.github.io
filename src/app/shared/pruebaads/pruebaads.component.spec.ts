import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaadsComponent } from './pruebaads.component';

describe('PruebaadsComponent', () => {
  let component: PruebaadsComponent;
  let fixture: ComponentFixture<PruebaadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaadsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
