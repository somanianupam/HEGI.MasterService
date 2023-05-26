import { Injectable } from '@nestjs/common';
import { PinCode } from '../common/entities/pincode.entity';
import { IPinCodeRepo, PinCodeRepo } from '../common/repositorites/pincode.repo';

@Injectable()
export class PinCodeService {
  private pincodeRepository: IPinCodeRepo;
  constructor() {
    this.pincodeRepository = new PinCodeRepo(PinCode);
  }

  async list(): Promise<PinCode[]> {
    return await this.pincodeRepository.findAll();
  }

  async findByCode(code: string): Promise<PinCode> {
    return await this.pincodeRepository.findOne({ code });
  }
}
