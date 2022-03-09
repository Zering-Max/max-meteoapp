import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('weather')
export class Weather {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ default: '' })
  description?: string;
  @Column({ default: '' })
  icon?: string;
  @Column({ default: 0 })
  temp_min?: number;
  @Column({ default: 0 })
  temp_max?: number;
  @Column({ default: '' })
  city?: string;
}
