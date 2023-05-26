import { DatabaseService } from './database.service';
import { SEQUELIZE } from '../../../constants';
import { sequelizeConnect } from './database.connect';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: sequelizeConnect,
    inject: [DatabaseService],
  },
];
