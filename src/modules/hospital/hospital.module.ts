import { Module } from '@nestjs/common';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hospital } from '../common/entities/hospital.entity';
import { AuthService } from '../common/auth/auth.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../common/auth/constants';
import { JwtStrategy } from '../common/auth/jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { DatabaseModule } from './../common/database/database.module';
const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });
@Module({
  imports: [
    DatabaseModule,
    passportModule,
    TypeOrmModule.forFeature([Hospital]),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: {
        expiresIn: jwtConstants.expirationTime,
      },
    }),
  ],
  controllers: [HospitalController],
  providers: [HospitalService, AuthService, JwtStrategy],
})
export class HospitalModule {}
