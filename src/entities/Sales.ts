import { text } from "stream/consumers";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subject } from "./Subject";
import { Video } from "./Video";

@Entity('sales')
export class Sales {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text' })
    name: string

    @Column({ type: 'text', nullable: true })
    description: string


    @OneToMany(() => Video,(video) => video.sales)
    videos: Video[]


    @ManyToMany(() =>Subject, subject => subject.sales)
    subjects: Subject[]
}

