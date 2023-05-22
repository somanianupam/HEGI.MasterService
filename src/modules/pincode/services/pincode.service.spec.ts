import { Test, TestingModule } from '@nestjs/testing';

import { PinCodeService } from './pincode.service';
import { pincodeProviders } from '../providers/pincode.providers';

describe('PinCodeService', () => {
  let service: PinCodeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PinCodeService, ...pincodeProviders],
      exports: [PinCodeService],
    }).compile();

    service = module.get<PinCodeService>(PinCodeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
