import path from 'path';
import { Sequelize } from 'sequelize-typescript';
import { SequelizeTypescriptMigration } from 'sequelize-typescript-migration-lts';
import { PinCode } from '../entities/pincode.entity';
import { DatabaseService } from './database.service';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async (databaseService: DatabaseService) => {
      const sequelize = new Sequelize(databaseService.sequelizeOrmConfig);
      sequelize.addModels([PinCode]);
      //await sequelize.sync();
      await SequelizeTypescriptMigration.makeMigration(sequelize, {
        outDir: path.resolve('db','migrations'),
        migrationName: "migration",
        preview: false,
      });
      return sequelize;
    },
    inject: [DatabaseService],
  },
];
