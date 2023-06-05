import { Test, TestingModule } from '@nestjs/testing';
import { Hospital } from '../../common/entities/hospital.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { MockHospitalRepository } from './mock.hospital.repo';

describe('HospitalController', () => {
  let repository: MockHospitalRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: getRepositoryToken(Hospital),
          useClass: MockHospitalRepository,
        },
      ],
    }).compile();
    repository = module.get<MockHospitalRepository>(getRepositoryToken(Hospital));
  });

  describe('findAll', () => {
    it('should return an array of example entities', async () => {
      const expectedResult: Hospital[] = [
        {
          id: 3,
          hospitalId: 3,
          hospitalName: 'CLOUDNINESs HOSPITALS',
          locatorId: 148189,
          phone: '18605006899',
          fax: null,
          website: 'insurancenoida@cloudninescaress.com',
          address: {
            id: 5,
            line1: 'C-106, SECTOR-52',
            line2: null,
            city: 'GAUTAM BUDH NAGAR',
            state: 'UTTAR PRADESH',
            pinNumber: '201301',
            latitude: null,
            longitude: null,
          },
        },
        {
          id: 4,
          hospitalId: 4,
          hospitalName: 'CLOUDNINES HOSPITALS',
          locatorId: 148289,
          phone: '18605000899',
          fax: null,
          website: 'insurancenoida@cloudninescares.com',
          address: {
            id: 6,
            line1: 'C-107, SECTOR-52',
            line2: null,
            city: 'GAUTAM BUDH NAGAR',
            state: 'UTTAR PRADESH',
            pinNumber: '201301',
            latitude: null,
            longitude: null,
          },
        },
        {
          id: 5,
          hospitalId: 5,
          hospitalName: 'CLOUDNINE HOSPITALS',
          locatorId: 148299,
          phone: '18605100899',
          fax: null,
          website: 'insurenoida@cloudninescares.com',
          address: {
            id: 7,
            line1: 'C-94, SECTOR-52',
            line2: null,
            city: 'GAUTAM BUDH NAGAR',
            state: 'UTTAR PRADESH',
            pinNumber: '201301',
            latitude: null,
            longitude: null,
          },
        },
      ];
      jest.spyOn(repository, 'findAll').mockResolvedValue(expectedResult);
      const result = await repository.findAll();
      expect(result).toBeDefined();
      expect(result).toEqual(expectedResult);
    });
  });

  describe('findOne', () => {
    it('should return an example entity', async () => {
      const expectedResult: Hospital = {
        id: 3,
        hospitalId: 3,
        hospitalName: 'CLOUDNINESs HOSPITALS',
        locatorId: 148189,
        phone: '18605006899',
        fax: null,
        website: 'insurancenoida@cloudninescaress.com',
        address: {
          id: 5,
          line1: 'C-106, SECTOR-52',
          line2: null,
          city: 'GAUTAM BUDH NAGAR',
          state: 'UTTAR PRADESH',
          pinNumber: '201301',
          latitude: null,
          longitude: null,
        },
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
      const entityToCreate: Hospital = {
        hospitalName: 'CLOUDNINES HOSPITAL',
        locatorId: 148389,
        phone: '186011899',
        website: 'insurancenoida@cloudninescares.in',
        id: null,
        hospitalId: null,
        fax: null,
        address: {
          id: null,
          line1: 'C-201, SECTOR-52',
          city: 'GAUTAM BUDH NAGAR',
          state: 'UTTAR PRADESH',
          pinNumber: '201301',
          line2: null,
          latitude: null,
          longitude: null,
        },
      };
      const expectedResult: Hospital = {
        id: 6,
        hospitalId: 6,
        hospitalName: 'CLOUDNINES HOSPITAL',
        locatorId: 148389,
        phone: '186011899',
        fax: null,
        website: 'insurancenoida@cloudninescares.in',
        address: {
          id: 8,
          line1: 'C-201, SECTOR-52',
          line2: null,
          city: 'GAUTAM BUDH NAGAR',
          state: 'UTTAR PRADESH',
          pinNumber: '201301',
          latitude: null,
          longitude: null,
        },
      };
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
      const expectedResult: Hospital = {
        id: 5,
        hospitalId: 5,
        hospitalName: 'CLOUDNINE HOSPITALS',
        locatorId: 1484399,
        phone: '18605100899',
        fax: null,
        website: 'insurenoida@cloudninescares.com',
        address: {
          id: 7,
          line1: 'C-94, SECTOR-52',
          line2: null,
          city: 'GAUTAM BUDH NAGAR',
          state: 'UTTAR PRADESH',
          pinNumber: '201301',
          latitude: null,
          longitude: null,
        },
      };
      jest.spyOn(repository, 'updateHospital').mockResolvedValue(expectedResult);

      const result = await repository.updateHospital(6, entityToUpdate);
      expect(result).toBeDefined();
    });
  });

  describe('update', () => {
    it('should return error to update an non existing entity', async () => {
      const entityToUpdate: any = {
        hospitalName: 'CLOUDNINE HOSPITALS',
        locatorId: 1484399,
        phone: '18615109899',
        website: 'insurenoidas@cloudninescares.com',
      };
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
