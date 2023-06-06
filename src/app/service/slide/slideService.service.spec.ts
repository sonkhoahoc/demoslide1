/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SlideServiceService } from './slideService.service';

describe('Service: SlideService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SlideServiceService]
    });
  });

  it('should ...', inject([SlideServiceService], (service: SlideServiceService) => {
    expect(service).toBeTruthy();
  }));
});
