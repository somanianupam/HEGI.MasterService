import { Controller, InternalServerErrorException, UseGuards } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { Hospital } from '../common/entities/hospital.entity';
import { Crud } from '@nestjsx/crud';
import { AuthGuard } from '@nestjs/passport';

@Crud({
  model: {
    type: Hospital,
  },
})
@Controller('hospitals')
// @UseGuards(AuthGuard())
export class HospitalController {
  constructor(private readonly service: HospitalService) {}
}
