import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
import { PinCodeService } from './pincode.service';
import { PinCode } from '../common/entities/pincode.entity';

@Controller('pincode')
export class PinCodeController {
  constructor(private readonly pincodeService: PinCodeService) {}

  @Get()
  async list(): Promise<string> {
    try {
      return Promise.resolve('Hello');
    } catch (err: any) {
      throw new InternalServerErrorException({
        statusCode: 500,
        message: 'http.serverError.internalServerError',
        _error: err.message,
      });
    }
  }
}
