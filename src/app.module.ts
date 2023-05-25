import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { v4 as uuid } from 'uuid';
import { PinCodeModule } from './modules/pincode/pincode.module';
import { HealthModule } from './shared/health/health.module';
import { LoggerService } from './shared/logger/logger.service';
import configs from './configs';

const logFormat = winston.format.printf((msg) => {
  return `[${msg.timestamp}] [${msg.level}] [expressRequestId=${uuid()}]: ${msg.message}`;
});

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      isGlobal: true,
      cache: true,
      envFilePath: ['.env'],
      expandVariables: true,
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename: './logger/error.log',
          level: 'error',
        }),
        new winston.transports.File({
          filename: './logger/combination.log',
          level: 'debug',
          tailable: true,
        }),
        new winston.transports.Console({
          level: 'debug',
        }),
      ],
      format: winston.format.combine(winston.format.timestamp(), logFormat, winston.format.json()),
      levels: {
        info: 0,
        warn: 1,
        debug: 2,
        error: 3,
      },
    }),
    PinCodeModule,
    HealthModule,
  ],
  providers: [LoggerService],
})
export class AppModule {}
