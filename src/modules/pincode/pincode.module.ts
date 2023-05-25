import { Module } from '@nestjs/common';
import { PinCodeController } from './pincode.controller';
import { PinCodeService } from './pincode.service';
import { pincodeProviders } from './pincode.provider';
import { DatabaseModule } from '../common/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [PinCodeController],
  providers: [PinCodeService, ...pincodeProviders],
  exports: [PinCodeService],
})
export class PinCodeModule {}
