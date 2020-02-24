import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponenteClienteHttpComponent } from './componente-cliente-http.component';

describe('ComponenteClienteHttpComponent', () => {
  let component: ComponenteClienteHttpComponent;
  let fixture: ComponentFixture<ComponenteClienteHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponenteClienteHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponenteClienteHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
