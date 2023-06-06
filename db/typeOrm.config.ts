
import path from 'path';
import { DataSource } from 'typeorm';
import Config  from '../src/configs/app.configuration';

const MConfig = Config() as Record<string, any>;

export  const AppDataSource = new DataSource({
    type: 'postgres',
    host: MConfig.db.postgres.host,
    port: MConfig.db.postgres.port,
    database: MConfig.db.postgres.name,
    username: MConfig.db.postgres.username,
    password: MConfig.db.postgres.password,
    entities:[path.join(__dirname, '..', 'src', 'modules', '**', '*.entity.ts')],
    migrations: [path.join(__dirname, 'migrations', '*.ts')]
});