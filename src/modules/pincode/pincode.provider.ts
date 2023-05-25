import { PinCode } from '../common/entities/pincode.entity';
import { PINCODE_REPOSITORY } from '../../constants';

export const pincodeProviders = [{ provide: PINCODE_REPOSITORY, useValue: PinCode }];
