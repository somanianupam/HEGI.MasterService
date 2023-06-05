import { Repository } from 'typeorm';
import { Hospital } from '../../common/entities/hospital.entity';

export class MockHospitalRepository extends Repository<Hospital> {
  // Implement the required repository methods for testing purposes
  async findAll() {
    const resp = [
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
    return resp;
  }
  async findOneById(id: number): Promise<Hospital | undefined> {
    const resp = {
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
    };

    return resp;
  }

  async createHospital(hospital: Hospital): Promise<Hospital> {
    const response = {
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
    return response;
  }

  async updateHospital(id: number, hospital: Hospital): Promise<Hospital | any> {
    const response = {
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

    return response;
  }

  deleteById(id: number) {
    return true;
  }

  // Add more methods as needed...
}
