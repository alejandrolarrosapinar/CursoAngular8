import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarNuevoMarcadorComponent } from './editar-nuevo-marcador.component';

describe('EditarNuevoMarcadorComponent', () => {
  let component: EditarNuevoMarcadorComponent;
  let fixture: ComponentFixture<EditarNuevoMarcadorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarNuevoMarcadorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarNuevoMarcadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
