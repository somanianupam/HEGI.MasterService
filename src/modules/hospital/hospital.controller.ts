import { Controller, InternalServerErrorException, UseGuards, Param } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { Hospital } from '../common/entities/hospital.entity';
import { Crud, Override, ParsedBody, ParsedRequest } from '@nestjsx/crud';
import { AddressController } from '../address/address.controller';
import { HospitalDTO } from './dtos/hospital.dto';

@Crud({
  model: {
    type: Hospital,
  },
  dto: {
    create: HospitalDTO,
  },
  query: {
    // alwaysPaginate:true,
    join: {
      address: {
        eager: true,
      },
    },
  },
})
@Controller('hospitals')
// @UseGuards(AuthGuard())
export class HospitalController {
  constructor(private readonly service: HospitalService, private readonly addressController: AddressController) {}

  @Override('deleteOneBase')
  async deleteHospitalAndAddress(@Param('id') id: number): Promise<any> {
    const hospitalRecords = await this.service.findById(id);
    if (hospitalRecords.statusCode === 404) {
      return hospitalRecords;
    }
    if (hospitalRecords.address.id) {
      const deleteAddres = await this.addressController.deleteOne(hospitalRecords.address.id);
      if (deleteAddres.affected === 1) {
        return { status: 200, message: 'Successfully Deleted' };
      } else {
        return { status: 500, message: 'Not able to delete address entity' };
      }
      return deleteAddres;
    } else {
      return { status: 500, message: 'Not able to delete address entity' };
    }
  }
  // async createOne(data){
  //     return await this.service.createOne(data,null);
  // }
  // async find(){
  //   return await this.service.find();
  // }

  // async findOne(id:number){
  //   return await this.service.findOne({where:{id:id}})
  // }

  // async updateOne(id:number,data){
  //   const response=await this.service.findOne({where:{id:id}});
  //   return await this.service.updateOne(data,response);
  // }

  // async deleteOne(id){
  //   return await this.service.deleteOne(id);
  // }
}
