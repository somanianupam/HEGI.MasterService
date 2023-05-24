import { Module } from '@nestjs/common';
import { PinCodeModule } from './modules/pincode/pincode.module';
import { HealthModule } from './shared/health/health.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { v4 as uuid } from 'uuid';
import configs from './configs';

import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

const logFormat = winston.format.printf((msg) => {
  return `[${msg.timestamp}] [${msg.level}] [expressRequestId=${uuid()}]: ${
    msg.message
  }`;
});

@Module({
  imports: [
    PinCodeModule,
    HealthModule,
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) =>
        configService.get('database'),
      inject: [ConfigService],
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.Console({
          level: 'debug',
        }),
      ],
      format: winston.format.combine(
        winston.format.timestamp(),
        logFormat,
        winston.format.json(),
      ),
      levels: {
        info: 0,
        warn: 1,
        debug: 2,
        error: 3,
      },
    }),
  ],
  providers: [],
})
export class AppModule {}
