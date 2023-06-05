import { IsNotEmpty, IsOptional } from '@nestjs/class-validator';
import { IsString } from 'class-validator';
import { AddressDTO } from 'src/modules/address/dtos/address.dto';
export class HospitalDTO {
  @IsNotEmpty()
  @IsString()
  hospitalName: string;

  @IsNotEmpty()
  @IsString()
  locatorId: number;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsOptional()
  @IsString()
  fax: string;

  @IsOptional()
  @IsString()
  website: string;

  @IsNotEmpty()
  address: AddressDTO;
}
