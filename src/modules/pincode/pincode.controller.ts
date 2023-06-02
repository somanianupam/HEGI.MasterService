import { Controller } from '@nestjs/common';
import { PinCodeService } from './pincode.service';
import { PinCode } from '../common/entities/pincode.entity';
import { PinCodeDTO } from './dtos/pincode.dto';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from '../common/auth/auth.service';
@Crud({
  model: {
    type: PinCode,
  },
})
@Controller('pincodes')
// @UseGuards(AuthGuard())
export class PinCodeController {
  constructor(private readonly service: PinCodeService, private authService: AuthService) {}

  // @Post('/generateToken')
  // generateToken(@Req() request: any):any {
  //   return this.authService.generateToken(request.body);
  //   }
}
