import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('paneles_perla')
export class Panel {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tracker: string;

    @Column({ unique: true })
    panel: string;
};