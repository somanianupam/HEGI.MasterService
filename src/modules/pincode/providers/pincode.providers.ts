import { PinCode } from '../entity/pincode.entity';
import { PINCODE_REPOSITORY } from '../../../core/constants/';

export const pincodeProviders = [
  {
    provide: PINCODE_REPOSITORY,
    useValue: PinCode,
  },
];
