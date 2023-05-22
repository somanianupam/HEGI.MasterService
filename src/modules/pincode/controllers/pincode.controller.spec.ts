import { Test, TestingModule } from '@nestjs/testing';

import { PinCodeController } from './pincode.controller';
import { PinCodeService } from '../services/pincode.service';
import { pincodeProviders } from '../providers/pincode.providers';

describe('Pincode Controller', () => {
  let controller: PinCodeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PinCodeController],
      exports: [PinCodeService],
      providers: [PinCodeService, ...pincodeProviders],
    }).compile();

    controller = module.get<PinCodeController>(PinCodeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
