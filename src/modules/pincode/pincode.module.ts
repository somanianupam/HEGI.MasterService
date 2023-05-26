import { Module } from '@nestjs/common';
import { PinCodeController } from './pincode.controller';
import { PinCodeService } from './pincode.service';
import { DatabaseModule } from '../common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PinCodeController],
  providers: [PinCodeService],
  exports: [PinCodeService],
})
export class PinCodeModule {}
