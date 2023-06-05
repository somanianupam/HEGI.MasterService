import { Controller } from '@nestjs/common';
import { AddressService } from './address.service';
import { Address } from '../common/entities/address.entity';
import { Crud } from '@nestjsx/crud';

@Crud({
  model: {
    type: Address,
  },
})
@Controller('addresses')
// @UseGuards(AuthGuard())
export class AddressController {
  constructor(private readonly service: AddressService) {}

  async deleteOne(id: number): Promise<any> {
    this.service.deleteAddress(id);
  }
}
