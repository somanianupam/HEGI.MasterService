import { Injectable } from '@nestjs/common';
import { HealthCheckService, SequelizeHealthIndicator } from '@nestjs/terminus';

@Injectable()
export class HealthService {
  constructor(private health: HealthCheckService, private db: SequelizeHealthIndicator) {}

  check(service: string) {
    service;
    return this.database();
  }

  private database() {
    // return this.db.pingCheck('database');
    return this.health.check([() => this.db.pingCheck('database')]);
  }
}
