import { Module } from '@nestjs/common';
import { AddressController } from './address.controller';
import { AddressService } from './address.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from '../common/entities/hospital.entity';
import { AuthModule } from '../common/auth/auth.module';
import { Address } from '../common/entities/address.entity';

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([Address, Hospital])],
  controllers: [AddressController],
  providers: [AddressService],
})
export class AddressModule {}
