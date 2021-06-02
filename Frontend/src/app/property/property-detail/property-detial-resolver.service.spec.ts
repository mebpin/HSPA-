/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PropertyDetialResolverService } from './property-detial-resolver.service';

describe('Service: PropertyDetialResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PropertyDetialResolverService]
    });
  });

  it('should ...', inject([PropertyDetialResolverService], (service: PropertyDetialResolverService) => {
    expect(service).toBeTruthy();
  }));
});
