import { Injectable } from '@nestjs/common';
import type { ResponseDTO } from './common.response.dto';

@Injectable()
export class ResponseMaker {
  success(
    data: null | [] | Record<string, unknown>,
    message: string,
  ): ResponseDTO {
    return { success: true, data: data, message: message };
  }

  internalError(message = 'Server Internal Error'): ResponseDTO {
    return { success: false, data: null, message: message, errors: null };
  }

  unprocessableEntity(message = 'Validation Error', errors: []): ResponseDTO {
    return { success: false, data: null, message: message, errors: errors };
  }

  forbidden(message = 'Forbidden'): ResponseDTO {
    return { success: false, data: null, message: message, errors: null };
  }
}
