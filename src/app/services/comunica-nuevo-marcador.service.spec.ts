import { TestBed } from '@angular/core/testing';

import { ComunicaNuevoMarcadorService } from './comunica-nuevo-marcador.service';

describe('ComunicaNuevoMarcadorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComunicaNuevoMarcadorService = TestBed.get(ComunicaNuevoMarcadorService);
    expect(service).toBeTruthy();
  });
});
