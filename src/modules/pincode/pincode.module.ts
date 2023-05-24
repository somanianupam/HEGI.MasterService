import { Module } from '@nestjs/common';
import { PinCodeController } from './pincode.controller';
import { PinCodeService } from './pincode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinCode } from '../common/entities/pincode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PinCode])],
  controllers: [PinCodeController],
  providers: [PinCodeService],
  exports: [PinCodeService],
})
export class PinCodeModule {}
