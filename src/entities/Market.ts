import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity('market')

export class Market {

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

    @ManyToMany(() =>Product, product => product.market)
    products: Product[]
}