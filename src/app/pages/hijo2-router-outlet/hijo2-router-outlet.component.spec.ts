import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo2RouterOutletComponent } from './hijo2-router-outlet.component';

describe('Hijo2RouterOutletComponent', () => {
  let component: Hijo2RouterOutletComponent;
  let fixture: ComponentFixture<Hijo2RouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo2RouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo2RouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
