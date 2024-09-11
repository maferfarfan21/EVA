import { TestBed } from '@angular/core/testing';

import { PlantIdService } from './plant-id.service';

describe('PlantIdService', () => {
  let service: PlantIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
