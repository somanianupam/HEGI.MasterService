import { Sequelize } from 'sequelize-typescript';
import { PinCode } from '../entities/pincode.entity';
import { DatabaseService } from './database.service';

export const sequelizeConnect = async (databaseService: DatabaseService): Promise<Sequelize> => {
  const sequelize = new Sequelize(databaseService.sequelizeOrmConfig);
  sequelize.addModels([PinCode]);
  return sequelize;
};
