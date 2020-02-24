import { TestBed } from '@angular/core/testing';

import { ServicioClienteHttpService } from './servicio-cliente-http.service';

describe('ServicioClienteHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicioClienteHttpService = TestBed.get(ServicioClienteHttpService);
    expect(service).toBeTruthy();
  });
});
