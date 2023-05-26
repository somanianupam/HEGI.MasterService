import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import Config from './configs';
import { DatabaseModule } from './modules/common/database/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: Config,
      isGlobal: true,
      cache: true,
      expandVariables: true,
      envFilePath: ['.env'],
    }),
    DatabaseModule
  ],
  providers: [],
})
export class MigrationModule {}
