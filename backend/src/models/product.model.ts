//relacion con categorias: clases
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CategoryEntity } from './category.model';
//import * as bcrypt from 'bcrypt';


@Entity('products', { schema: 'ventas' })
export class ProductEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({
    name: 'create_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createAt: Date;
  @UpdateDateColumn({
    name: 'update_at',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updateAt: Date;
  @DeleteDateColumn({
    name: 'delete_at',
    type: 'timestamp',
    nullable: true,
  })
  delete: Date;

  @Column('varchar', {
    name: 'title',
    nullable: false,
    comment: 'nombre del producto',
  })
  title: string;

  @Column('number', {
    name: 'price',
    nullable: false,
    comment: 'precio del producto',
  })
  price: number;

  @Column('varchar', {
    name: 'description',
    nullable: false,
    comment: 'descripcion del producto',
  })
  description: string;

  @Column('varchar', {
    name: 'image',
    nullable: false,
    comment: 'imagen del producto',
  })
  image: string;

  @Column('number', {
    name: 'category',
    nullable: false,
    comment: 'categoria a la que pertenece el producto',
  })
  category: CategoryEntity;
  email: any;
  password: any;

  @BeforeInsert()
  @BeforeUpdate()
  getTitle(){
    if(!this.title){
    return;
  }
  this.title = this.title.toUpperCase();
}
/*
getEmail() {
  if (!this.email) {
    return;
  }
  this.email = this.email.toLowerCase().trim();
}

  async getPassword(){
  if(!this.password){
    return;
  }
  this.password = await bcrypt.hash(this.password, 12);
}
@ManyToOne(() => CategoryEntity, category => category.productos)
  categoria: CategoryEntity;
*/

}



