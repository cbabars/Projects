import { TestBed, inject } from '@angular/core/testing';

import { EmailsenderService } from './emailsender.service';

describe('EmailsenderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmailsenderService]
    });
  });

  it('should be created', inject([EmailsenderService], (service: EmailsenderService) => {
    expect(service).toBeTruthy();
  }));
});
