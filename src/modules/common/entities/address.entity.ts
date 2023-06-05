import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true, nullable: false, update: true })
  line1: string;

  @Column({ unique: false, nullable: true, update: true })
  line2: string;

  @Column({ nullable: false, update: true })
  city: string;

  @Column({ nullable: false, update: true })
  state: string;

  @Column({ nullable: false, update: true })
  pinNumber: string;

  @Column({ nullable: true, update: true })
  latitude: string;

  @Column({ nullable: true, update: true })
  longitude: string;
}
