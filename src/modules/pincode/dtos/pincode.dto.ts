import { IsNotEmpty } from '@nestjs/class-validator';

export class PinCodeDTO {
  @IsNotEmpty()
  id: string;

  @IsNotEmpty()
  pincode: string;
}
