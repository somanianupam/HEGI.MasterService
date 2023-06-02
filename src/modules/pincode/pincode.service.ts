import { Injectable } from '@nestjs/common';
import { PinCode } from '../common/entities/pincode.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class PinCodeService extends TypeOrmCrudService<PinCode> {
  // private pincodeRepository: IPinCodeRepo;
  constructor(@InjectRepository(PinCode) repo) {
    super(repo);
  }
}
