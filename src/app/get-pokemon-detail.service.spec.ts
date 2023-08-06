import { TestBed } from '@angular/core/testing';

import { GetPokemonDetailService } from './get-pokemon-detail.service';

describe('GetPokemonDetailService', () => {
  let service: GetPokemonDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetPokemonDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
