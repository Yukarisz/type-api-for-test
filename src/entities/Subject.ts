import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Sales } from "./Sales";

@Entity('subjects')
export class  Subject {
    @PrimaryGeneratedColumn()
   id: number


   @Column({type: 'text'})
   name: string

@ManyToMany(() => Sales, sales => sales.subjects)
@JoinTable({
    name: 'sales_subject',
    joinColumn: {
        name: 'sales_id',
        referencedColumnName: 'id'
    },
    inverseJoinColumn: {
        name: 'subject_id',
        referencedColumnName: 'id'
    }
})
   sales: Sales[]
}