import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IPinCodeService } from './pincode.service.interface';

import { PinCode } from '../common/entities/pincode.entity';

@Injectable()
export class PinCodeService implements IPinCodeService {
  constructor(
    @InjectRepository(PinCode)
    private readonly pincodeRepository: Repository<PinCode>,
  ) {}

  async list(): Promise<PinCode[]> {
    return await this.pincodeRepository.find();
  }

  async findByCode(code: string): Promise<PinCode> {
    return await this.pincodeRepository.findOne({ where: { code } });
  }
}
