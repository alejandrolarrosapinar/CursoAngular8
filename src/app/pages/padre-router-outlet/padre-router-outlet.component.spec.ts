import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PadreRouterOutletComponent } from './padre-router-outlet.component';

describe('PadreRouterOutletComponent', () => {
  let component: PadreRouterOutletComponent;
  let fixture: ComponentFixture<PadreRouterOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PadreRouterOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PadreRouterOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
