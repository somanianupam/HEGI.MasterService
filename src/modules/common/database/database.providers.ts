import { DatabaseService } from './database.service';
import { DATABASE_CONNECTION } from '../../../constants';
import { typeOrmConnect } from './database.connect';

export const databaseProviders = [
  {
    provide: DATABASE_CONNECTION,
    useFactory: typeOrmConnect,
    inject: [DatabaseService],
  },
];
