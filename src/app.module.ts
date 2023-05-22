import { Module } from '@nestjs/common';
import { PinCodeModule } from './modules/pincode/pincode.module';
import { DatabaseModule } from './core/database/database.module';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { v4 as uuid } from 'uuid';

import { LoggerService } from './common/logger/common.logger';

const logFormat = winston.format.printf((msg) => {
  return `[${msg.timestamp}] [${msg.level}] [expressRequestId=${uuid()}]: ${
    msg.message
  }`;
});

@Module({
  imports: [
    DatabaseModule,
    PinCodeModule,
    WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename: './src/logger/error.log',
          level: 'error',
        }),
        new winston.transports.File({
          filename: './src/logger/combination.log',
          level: 'debug',
          tailable: true,
        }),
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
  controllers: [],
  providers: [LoggerService],
})
export class AppModule {}
