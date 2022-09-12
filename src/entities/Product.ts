import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Market } from "./Market";

@Entity('products')

export class  Product {

    @PrimaryGeneratedColumn()
   id: number

   @Column({type: 'text'})
   name: string

   @Column({type: 'text'})
   codeProduct: string

   @Column({type: 'text'})
   codeBars: string

   @Column({type: 'text'})
   cost: string

   @Column({type: 'text'})
   saleValue: string

   @Column({type: 'text'})
   brand: string

   @Column({type: 'text'})
   validity: string
     
   @Column({type: 'text'})
   category: string
}
