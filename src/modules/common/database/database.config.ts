import { PinCode } from '../entities/pincode.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
const config = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DB_DIALECT,
};

const connectionOptions: PostgresConnectionOptions = {
  type: 'postgres',
  host: config.host || 'localhost',
  port: 5432,
  username: config.user || 'postgres',
  password: config.password || 'admin',
  database: config.database || 'postgres',
  entities: [PinCode],
  synchronize: true,
};

export = connectionOptions;
