export class ResponseDTO {
  success: boolean;
  data?: [] | null | Record<string, unknown>;
  message: string;
  errors?: [] | null;
}
