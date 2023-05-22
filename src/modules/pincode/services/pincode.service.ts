import { Injectable, Inject } from '@nestjs/common';
import { IPinCodeService } from './../interfaces/pincode.service.interface';

import { PinCode } from '../entity/pincode.entity';
import { PINCODE_REPOSITORY } from '../../../core/constants';

@Injectable()
export class PinCodeService implements IPinCodeService {
  constructor(
    @Inject(PINCODE_REPOSITORY)
    private readonly pincodeRepository: typeof PinCode,
  ) {}

  async list(): Promise<PinCode[]> {
    return await this.pincodeRepository.findAll<PinCode>();
  }

  async findByCode(code: string): Promise<PinCode> {
    return await this.pincodeRepository.findOne<PinCode>({ where: { code } });
  }
}
