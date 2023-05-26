import { ConfigModule, ConfigService } from '@nestjs/config';
import path from 'path';
import { SequelizeTypescriptMigration } from 'sequelize-typescript-migration-lts';
import { sequelizeConnect } from '../src/modules/common/database/database.connect'
import { DatabaseService } from '../src/modules/common/database/database.service';
import configs from '../src/configs';


async function run() {

    ConfigModule.forRoot({
        load: configs,
        isGlobal: true,
        envFilePath: ['.env'],
        expandVariables: true,
    })

    const configService = new ConfigService();
    const databaseService = new DatabaseService(configService);
    sequelizeConnect(databaseService).then(sequelize => {

        SequelizeTypescriptMigration.makeMigration(sequelize, {
            outDir: path.resolve('db','migrations'),
            migrationName: "migration",
            preview: false,
        });
    })

}

run()
