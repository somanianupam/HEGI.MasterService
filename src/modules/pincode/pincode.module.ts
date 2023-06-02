import { Module } from '@nestjs/common';
import { PinCodeController } from './pincode.controller';
import { PinCodeService } from './pincode.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PinCode } from '../common/entities/pincode.entity';
import { AuthModule } from '../common/auth/auth.module';
import { DatabaseModule } from '../common/database/database.module';

@Module({
  imports: [DatabaseModule, AuthModule, TypeOrmModule.forFeature([PinCode])],
  controllers: [PinCodeController],
  providers: [PinCodeService],
})
export class PinCodeModule {}
