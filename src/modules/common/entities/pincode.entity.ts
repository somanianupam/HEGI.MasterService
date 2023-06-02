// import { Table, Column, Model, DataType } from 'sequelize-typescript';

// @Table
// export class PinCode extends Model<PinCode> {
//   @Column({
//     type: DataType.STRING,
//     allowNull: false,
//   })
//   name: string;
//   @Column({
//     type: DataType.STRING,
//     unique: true,
//     allowNull: false,
//   })
//   code: string;
// }
import { Entity, PrimaryGeneratedColumn, Column, Generated, PrimaryColumn } from 'typeorm';

@Entity()
export class PinCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  pinNumber: string;

}
