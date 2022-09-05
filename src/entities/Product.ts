import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sales } from "./Sales";

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

   @ManyToMany(() => Sales, sales => sales.products)
   @JoinTable({
       name: 'sales_product',
       joinColumn: {
           name: 'sales_id',
           referencedColumnName: 'id'
       },
       inverseJoinColumn: {
           name: 'product_id',
           referencedColumnName: 'id'
       }
   })
   @ManyToMany(() =>Sales, sales => sales.products)
   sales: Sales[]
}