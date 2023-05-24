import { registerAs } from '@nestjs/config';

import { join } from 'path';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export default registerAs(
  'database',
  (): PostgresConnectionOptions => ({
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: process.env.POSTGRES_SSL === 'true',
    entities: [join(__dirname, '../**/*.entity{.ts,.js}')],
    // We are using migrations, synchronize should be set to false.
    synchronize: false,
    dropSchema: false,
    // Run migrations automatically,
    // you can disable this if you prefer running migration manually.
    migrationsRun: false,
    logging: false,
    migrations: [join(__dirname, '../migrations/**/*{.ts,.js}')],
    // cli: {
    //   migrationsDir: join(__dirname, '../migrations'),
    //   entitiesDir: join(__dirname, '../**/*.entity{.ts,.js}'),
    // },
  }),
);
