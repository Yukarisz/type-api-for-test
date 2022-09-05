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

   @ManyToMany(() => Market, market => market.products)
   @JoinTable({

       name: 'market_product',
       joinColumn: {

           name: 'market_id',
           referencedColumnName: 'id'
       },
       
       inverseJoinColumn: {
           name: 'product_id',
           referencedColumnName: 'id'
       }
   })
   @ManyToMany(() =>Market, market => market.products)
   market: Market[]
}