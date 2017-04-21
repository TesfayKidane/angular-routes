import { TestBed, inject } from '@angular/core/testing';

import { MyguardService } from './myguard.service';

describe('MyguardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyguardService]
    });
  });

  it('should ...', inject([MyguardService], (service: MyguardService) => {
    expect(service).toBeTruthy();
  }));
});
