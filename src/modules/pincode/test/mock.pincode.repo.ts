import { Repository } from 'typeorm';
import { PinCode } from '../../common/entities/pincode.entity';

export class MockPinCodeRepository extends Repository<PinCode> {
  // Implement the required repository methods for testing purposes
  async findAll() {
    const resp = [
      {
        id: 1,
        name: null,
        pinNumber: '125319',
      },
      {
        id: 8,
        name: 'tests',
        pinNumber: '123456',
      },
    ];
    return resp;
  }
  async findOneById(id: number): Promise<PinCode | undefined> {
    const resp = {
      id: 1,
      name: null,
      pinNumber: '125319',
    };

    return resp;
  }

  async createHospital(pincode: PinCode): Promise<PinCode> {
    const response = {
      id: 1,
      name: null,
      pinNumber: '125319',
    };
    return response;
  }

  async updateHospital(id: number, pincode: PinCode): Promise<PinCode | any> {
    const response = {
      id: 1,
      name: null,
      pinNumber: '125319',
    };
    return response;
  }

  deleteById(id: number) {
    return true;
  }

  // Add more methods as needed...
}
