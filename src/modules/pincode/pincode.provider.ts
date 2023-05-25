import { PinCode } from '../common/entities/pincode.entity';

export const pincodeProviders = [{ provide: 'PinCodeRepository', useValue: PinCode }];
