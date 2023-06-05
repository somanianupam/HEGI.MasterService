import { Test, TestingModule } from '@nestjs/testing';
import { PinCode } from '../../common/entities/pincode.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockPinCodeRepository } from './mock.pincode.repo';

describe('HospitalController', () => {
  let repository: MockPinCodeRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(PinCode),
          useClass: MockPinCodeRepository,
        },
      ],
    }).compile();
    repository = module.get<MockPinCodeRepository>(getRepositoryToken(PinCode));
  });

  describe('findAll', () => {
    it('should return an array of example entities', async () => {
      const expectedResult: PinCode[] = [
        {
            "id": 1,
            "name": null,
            "pinNumber": "125319"
        },
        {
            "id": 8,
            "name": "tests",
            "pinNumber": "123456"
        }
    ]
      jest.spyOn(repository, 'findAll').mockResolvedValue(expectedResult);
      const result = await repository.findAll();
      expect(result).toBeDefined();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return an example entity', async () => {
      const expectedResult: PinCode = {
        "id": 1,
        "name": null,
        "pinNumber": "125319"
    };
      jest.spyOn(repository, 'findOneById').mockResolvedValue(expectedResult);

      const result = await repository.findOneById(3);
      expect(result).toBeDefined();
    });
  });

  describe('findOne', () => {
    it('should return error response', async () => {
      const expectedResult: any = {
        statusCode: 404,
        message: 'Hospital not found',
        error: 'Not Found',
      };
      jest.spyOn(repository, 'findOne').mockResolvedValue(expectedResult);

      const result = await repository.findOneById(101);
      expect(result).toBeDefined();
    });
  });

  describe('create', () => {
    it('should create a new example entity', async () => {
      const entityToCreate: PinCode = {
        "id": null,
        "name": null,
        "pinNumber": "125319"
    }
      const expectedResult: PinCode = {
        "id": 1,
        "name": null,
        "pinNumber": "125319"
    }
      jest.spyOn(repository, 'createHospital').mockResolvedValue(expectedResult);

      const result = await repository.createHospital(entityToCreate);

      expect(result).toBeDefined();
    });
  });

  //   describe('create', () => {
  //     it('should return error for duplicate entry', async () => {
  //       const entityToCreate: Hospital = {
  //         "hospitalName":"CLOUDNINES HOSPITAL",
  //         "locatorId":148389,
  //         "phone":"186011899",
  //         "website":"insurancenoida@cloudninescares.in",
  //         id:null,
  //         hospitalId:null,
  //         fax:null,
  //         "address":{
  //             id:null,
  //             "line1":"C-201, SECTOR-52",
  //             "city":"GAUTAM BUDH NAGAR",
  //             "state":"UTTAR PRADESH",
  //             "pinNumber":"201301",
  //             "line2":null,
  //             "latitude":null,
  //             "longitude":null
  //         }
  //     }
  //       const expectedResult: any = {
  //         "statusCode": 500,
  //         "message": "Internal server error"
  //       }
  //       jest.spyOn(service, 'createOne').mockResolvedValue(expectedResult);

  //       const result = await controller.createOne(entityToCreate);

  //       expect(result).toBeDefined();
  //     });
  //   });

  describe('update', () => {
    it('should update an example entity', async () => {
      const entityToUpdate: any = {
        hospitalName: 'CLOUDNINE HOSPITALS',
        locatorId: 1484399,
        phone: '18615109899',
        website: 'insurenoidas@cloudninescares.com',
      };
      const expectedResult: PinCode = {
        "id": 1,
        "name": null,
        "pinNumber": "125319"
    }
      jest.spyOn(repository, 'updateHospital').mockResolvedValue(expectedResult);

      const result = await repository.updateHospital(6, entityToUpdate);
      expect(result).toBeDefined();
    });
  });

  describe('update', () => {
    it('should return error to update an non existing entity', async () => {
      const entityToUpdate: any = {
        "name": null,
        "pinNumber": "125319"
    }
      const expectedResult: any = {
        statusCode: 404,
        message: 'Hospital not found',
        error: 'Not Found',
      };
      jest.spyOn(repository, 'updateHospital').mockResolvedValue(expectedResult);

      const result = await repository.updateHospital(101, entityToUpdate);
      expect(result).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should remove an existing entity', async () => {
      // const expectedResult: any = {};
      // jest.spyOn(repository, 'deleteById').mockResolvedValue();

      const result = await repository.deleteById(5);

      expect(result).toBeDefined();
    });
  });

  describe('remove', () => {
    it('should remove an example entity', async () => {
      // jest.spyOn(repository, 'deleteById').mockResolvedValue(expectedResult);

      const result = await repository.deleteById(101);

      expect(result).toBeDefined();
    });
  });
});
