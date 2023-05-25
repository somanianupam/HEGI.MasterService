import { Sequelize } from 'sequelize-typescript';
import { PinCode } from '../entities/pincode.entity';
import { DatabaseService } from './database.service';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (databaseService: DatabaseService) => {
      const sequelize = new Sequelize(databaseService.sequelizeOrmConfig);
      sequelize.addModels([PinCode]);
      await sequelize.sync();
      return sequelize;
    },
    inject: [DatabaseService],
  },
];
