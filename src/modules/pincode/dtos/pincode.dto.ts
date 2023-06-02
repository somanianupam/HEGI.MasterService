import { IsNotEmpty, IsOptional, MinLength, MaxLength, IsNumberString } from '@nestjs/class-validator';

export class PinCodeDTO {
  @IsOptional()
  name: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(6)
  @IsNumberString()
  pinNumber: string;
}
