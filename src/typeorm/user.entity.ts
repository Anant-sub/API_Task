import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class UserEntitiy {

    @PrimaryGeneratedColumn({ type: 'int' })
    id: number;

    @Column({ unique: true })
    title: string;

    @Column()
    comments: number;

    @Column()
    likes: number;

    @Column()
    author: string;

    @Column()
    createdAt: Date;

}