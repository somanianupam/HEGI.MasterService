import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table
export class PinCode extends Model<PinCode> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  code: string;
}
