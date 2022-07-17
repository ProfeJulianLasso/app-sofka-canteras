import { TestBed } from '@angular/core/testing';

import { CanteraNivelUnoService } from './cantera-nivel-uno.service';

describe('CanteraNivelUnoService', () => {
  let service: CanteraNivelUnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanteraNivelUnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
