import { text } from "stream/consumers";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";


@Entity('sales')
export class Sales {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: 'text' })
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @Column({type: 'text'})
    produ: string

    @Column({type: 'text' })
    amount: string

    @Column({type: 'text' })
    saleDate: string

    @Column({type: 'text' })
    payment: string


    @ManyToMany(() =>Product, product => product.sales)
    products: Product[]
}

