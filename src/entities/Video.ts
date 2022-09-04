import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Sales } from "./Sales";

@Entity('videos')
export class Video {
    @PrimaryGeneratedColumn()
id: number

@Column({type: 'text' })
title: string

@Column({type: 'text' })
url: string


@ManyToOne(() => Sales, sales => sales.videos )
@JoinColumn({name: 'sales.id'})
sales: Sales

}