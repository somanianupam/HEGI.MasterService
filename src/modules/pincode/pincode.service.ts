import { Injectable, Inject } from '@nestjs/common';
import { PinCode } from '../common/entities/pincode.entity';
import { PINCODE_REPOSITORY } from '../../constants';

@Injectable()
export class PinCodeService {
  constructor(
    @Inject(PINCODE_REPOSITORY)
    private readonly pincodeRepository: typeof PinCode,
  ) {}

  async list(): Promise<PinCode[]> {
    return await this.pincodeRepository.findAll<PinCode>();
  }

  async findByCode(code: string): Promise<PinCode> {
    return await this.pincodeRepository.findOne({ where: { code } });
  }
}
