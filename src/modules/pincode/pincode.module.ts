import { Module } from '@nestjs/common';
import { PinCodeController } from './controllers/pincode.controller';
import { PinCodeService } from './services/pincode.service';
import { pincodeProviders } from './providers/pincode.providers';
import { LoggerService } from '../../common/logger/common.logger';

@Module({
  controllers: [PinCodeController],
  providers: [PinCodeService, LoggerService, ...pincodeProviders],
  exports: [PinCodeService],
})
export class PinCodeModule {}
