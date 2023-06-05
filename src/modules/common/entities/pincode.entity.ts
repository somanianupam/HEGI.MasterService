import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class PinCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ unique: true })
  pinNumber: string;
}
