import { Injectable, Inject } from '@nestjs/common';
import { PinCode } from '../common/entities/pincode.entity';

@Injectable()
export class PinCodeService {
  constructor(
    @Inject('PinCodeRepository')
    private readonly pincodeRepository: typeof PinCode,
  ) {}

  async list(): Promise<PinCode[]> {
    return await this.pincodeRepository.findAll<PinCode>();
  }

  async findByCode(code: string): Promise<PinCode> {
    return await this.pincodeRepository.findOne({ where: { code } });
  }
}
