import { TestBed } from '@angular/core/testing';

import { ActiveWordsService } from './active-words.service';

describe('ActiveWordsService', () => {
  let service: ActiveWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
