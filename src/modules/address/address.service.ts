import { Injectable } from '@nestjs/common';
import { Address } from '../common/entities/address.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class AddressService extends TypeOrmCrudService<Address> {
  constructor(@InjectRepository(Address) repo) {
    super(repo);
  }

  async deleteAddress(id) {
    const deleteResp = await this.repo.delete({ id });
    return deleteResp;
  }
}
