import { PinCode } from '../entities/pincode.entity';

export interface IPinCodeRepo {
  findAll(): Promise<PinCode[]>;
  findOne(query: any): Promise<PinCode>;
}

export class PinCodeRepo implements IPinCodeRepo {
  private model: any;

  constructor(model: any) {
    this.model = model;
  }

  private createBaseQuery(query: any) {
    return {
      where: query,
    };
  }

  public async findAll(): Promise<PinCode[]> {
    const baseQuery = this.createBaseQuery({});
    return await this.model.findAll(baseQuery);
  }

  public async findOne(query: any): Promise<PinCode> {
    const baseQuery = this.createBaseQuery(query);
    return await this.model.findOne(baseQuery);
  }
}
