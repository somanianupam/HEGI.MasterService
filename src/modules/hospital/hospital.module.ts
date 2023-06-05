import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from '../common/entities/hospital.entity';
import { AuthModule } from '../common/auth/auth.module';
import { Address } from '../common/entities/address.entity';
import { AddressController } from '../address/address.controller';
import { AddressService } from '../address/address.service';
@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Hospital, Address])],
  controllers: [HospitalController],
  providers: [HospitalService, AddressController, AddressService],
})
export class HospitalModule {}
