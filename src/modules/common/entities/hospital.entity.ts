import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, Generated } from 'typeorm';
import { Address } from './address.entity';
@Entity()
export class Hospital {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('increment')
  hospitalId: number;

  @Column({ unique: true, nullable: false })
  hospitalName: string;

  @Column({ unique: true, nullable: false })
  locatorId: number;

  @Column({ unique: true, nullable: false })
  phone: string;

  @Column({ unique: true, nullable: true })
  fax: string;

  @Column({ unique: true, nullable: true })
  website: string;

  @OneToOne(() => Address, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'address', referencedColumnName: 'id' })
  address: Address;
}
