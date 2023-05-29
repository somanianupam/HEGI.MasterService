import { Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HealthController } from './health.controller';
import { HealthService } from './health.service';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TerminusModule, HttpModule, SequelizeModule.forRootAsync({
    inject: [ConfigService],
    useFactory: (configService: ConfigService): SequelizeModuleOptions => ({
      dialect: 'postgres',
      host: configService.get<string>('db.postgres.host'),
      port: configService.get<number>('db.postgres.port'),
      username: configService.get<string>('db.postgres.username'),
      password: configService.get<string>('db.postgres.password'),
      database: configService.get<string>('db.postgres.name')
    }),
  })],
  controllers: [HealthController],
  providers: [HealthService]
})
export class HealthModule { }
