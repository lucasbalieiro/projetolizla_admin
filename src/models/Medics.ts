import {
  Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, Column,
} from 'typeorm';

@Entity('medics')
class Medics {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'date_of_birth' })
  dateOfBirth: string;

  @Column()
  especiality: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Medics;
