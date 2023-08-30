import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactoanuncioComponent } from './contactoanuncio.component';

describe('ContactoanuncioComponent', () => {
  let component: ContactoanuncioComponent;
  let fixture: ComponentFixture<ContactoanuncioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactoanuncioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactoanuncioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
