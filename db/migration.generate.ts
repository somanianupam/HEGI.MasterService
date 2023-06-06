import { NestFactory } from '@nestjs/core';
import path from 'path';
import { SequelizeTypescriptMigration } from 'sequelize-typescript-migration-lts';
import { MigrationModule } from '../src/migration.module';
import { sequelizeConnect } from '../src/modules/common/database/database.connect';
import { DatabaseService } from '../src/modules/common/database/database.service';


async function bootstrap() {
  const app = await NestFactory.create(MigrationModule);
  const databaseService = app.get(DatabaseService)
  const sequelize = await sequelizeConnect(databaseService)
  await SequelizeTypescriptMigration.makeMigration(sequelize, {
    outDir: path.resolve('db','migrations'),
    migrationName: "migration",
    preview: false,
  });
}
bootstrap();
