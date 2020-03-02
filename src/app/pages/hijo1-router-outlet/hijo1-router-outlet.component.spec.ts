import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hijo1RouterOutletComponent } from './hijo1-router-outlet.component';

describe('Hijo1RouterOutletComponent', () => {
  let component: Hijo1RouterOutletComponent;
  let fixture: ComponentFixture<Hijo1RouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hijo1RouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hijo1RouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
