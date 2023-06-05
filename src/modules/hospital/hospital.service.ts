import { Injectable } from '@nestjs/common';
import { Hospital } from '../common/entities/hospital.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';

@Injectable()
export class HospitalService extends TypeOrmCrudService<Hospital> {
  constructor(@InjectRepository(Hospital) repo) {
    super(repo);
  }

  async findById(id) {
    const queryBuilder = this.repo.createQueryBuilder('hospital');
    queryBuilder.leftJoinAndSelect('hospital.address', 'id');
    queryBuilder.where({ id });
    const hospitalresp = await queryBuilder.getOne();
    if (!hospitalresp) {
      return { statusCode: 404, message: 'Hospital not found', error: 'Not Found' };
    }
    try {
      await this.repo.delete({ id });
    } catch (error) {
      return error;
    }
    return hospitalresp;
  }
}
