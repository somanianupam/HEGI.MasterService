import { Controller } from '@nestjs/common';
import { PinCodeService } from './pincode.service';
import { PinCode } from '../common/entities/pincode.entity';
import { PinCodeDTO } from './dtos/pincode.dto';
import { Crud } from '@nestjsx/crud';

import { AuthService } from '../common/auth/auth.service';
@Crud({
  model: { type: PinCode },
  dto: { create: PinCodeDTO },
  params: {
    slug: {
      field: 'ID',
      type: 'number',
      primary: true,
    },
  },
})
@Controller('pincodes')
export class PinCodeController {
  constructor(private readonly service: PinCodeService, private authService: AuthService) {}
}
