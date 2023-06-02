import { DatabaseService } from './database.service';
import { DataSource } from 'typeorm';

export const typeOrmConnect = async (databaseService: DatabaseService) => {
  const typeorm = new DataSource(databaseService.typeOrmConfig);
  return typeorm;
};
