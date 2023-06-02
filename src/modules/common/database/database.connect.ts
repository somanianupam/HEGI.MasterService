// import { Sequelize } from 'sequelize-typescript';
import { PinCode } from '../entities/pincode.entity';
import { DatabaseService } from './database.service';
import { DataSource } from 'typeorm';

export const typeOrmConnect = async (databaseService: DatabaseService) => {
  const typeorm = new DataSource(databaseService.typeOrmConfig);
  typeorm
    .initialize()
    .then(() => {
      // console.log('Data Source has been initialized');
    })
    .catch((err) => {
      // console.error('Data Source initialization error', err);
    });

  // sequelize.addModels([PinCode]);
  return typeorm;
};
