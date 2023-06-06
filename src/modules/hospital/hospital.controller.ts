import { Controller, Param } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { Hospital } from '../common/entities/hospital.entity';
import { Crud } from '@nestjsx/crud';
import { HospitalDTO } from './dtos/hospital.dto';


@Crud({
  model: {
    type: Hospital,
  },
  dto: {
    create: HospitalDTO,
  },
  params: {
    slug: {
      field: 'HOSPITAL_ID',
      type: 'number',
      primary: true,
    },
  },
})

@Controller('hospitals')

export class HospitalController {
  constructor(private readonly service: HospitalService) {}
}
