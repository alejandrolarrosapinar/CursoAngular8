import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HijoPadreComponent } from './hijo-padre.component';

describe('HijoPadreComponent', () => {
  let component: HijoPadreComponent;
  let fixture: ComponentFixture<HijoPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HijoPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HijoPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
