import { IsNotEmpty, IsOptional, MinLength, MaxLength, IsNumberString, IsNumber } from '@nestjs/class-validator';
import { IsString } from 'class-validator';
export class AddressDTO {
  @IsNotEmpty()
  @IsString()
  line1: string;

  @IsOptional()
  @IsString()
  line2: string;

  @IsNotEmpty()
  @IsString()
  city: string;

  @IsNotEmpty()
  @IsString()
  state: string;

  @IsOptional()
  @IsNumber()
  latitude: string;

  @IsOptional()
  @IsNumber()
  longitude: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  @IsNumberString()
  pinNumber: string;
}
