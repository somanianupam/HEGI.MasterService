import type {
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import type { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    console.log(request.body);

    const now = Date.now();
    return next.handle().pipe(
      tap(() => {
        console.log(`After... ${Date.now() - now}ms`);
        const response = context.switchToHttp().getResponse();
        response.header('X-Custom-Header', 'Custom Value');
      }),
    );
  }
}
