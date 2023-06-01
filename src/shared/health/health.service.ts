import { Injectable } from '@nestjs/common';
import {
  DiskHealthIndicator,
  HealthCheckService,
  HttpHealthIndicator,
  MemoryHealthIndicator,
  MicroserviceHealthIndicator,
  SequelizeHealthIndicator,
} from '@nestjs/terminus';
import path from 'path';
import { HealthEnum } from './enums/health.enum';

@Injectable()
export class HealthService {
  constructor(
    private health: HealthCheckService,
    private db: SequelizeHealthIndicator,
    private http: HttpHealthIndicator,
    private microservice: MicroserviceHealthIndicator,
    private memory: MemoryHealthIndicator,
    private readonly disk: DiskHealthIndicator,
  ) {}

  check(service: string) {
    let response: any;
    switch (service) {
      case HealthEnum.Database:
        response = this.database();
        break;

      case HealthEnum.Http:
        response = this.httpCheck();
        break;

      case HealthEnum.Microservice:
        response = this.microserviceCheck();
        break;

      case HealthEnum.Memory:
        response = this.memoryCheck();
        break;

      case HealthEnum.Disk:
        response = this.diskCheck();
        break;

      default:
        break;
    }
    return response;
  }

  private database() {
    return this.health.check([() => this.db.pingCheck(HealthEnum.Database)]);
  }

  private httpCheck() {
    return this.health.check([() => this.http.pingCheck(HealthEnum.Http, 'http://localhost:3000/')]);
  }

  private microserviceCheck() {
    // return this.health.check([() => this.microservice.pingCheck(HealthEnum.Microservice, 'http://localhost:3000/')]);
    return this.health.check([() => this.http.pingCheck(HealthEnum.Microservice, 'http://localhost:3000/')]);
  }

  private memoryCheck() {
    return this.health.check([() => this.memory.checkHeap(HealthEnum.Memory, 150 * 1024 * 1024)]);
  }

  private diskCheck() {
    return this.health.check([() => this.disk.checkStorage(HealthEnum.Disk, { path: path.resolve('/'), thresholdPercent: 0.5 })]);
  }
}
