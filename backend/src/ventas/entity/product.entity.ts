//relacion con categorias: clases
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ManyToOne } from 'typeorm/decorator/relations/ManyToOne';
import { CategoryEntity } from './category.entity';

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

  @ManyToOne(() => CategoryEntity, category => category.product)
  category: CategoryEntity;

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
  categorys: CategoryEntity;
  /*

  @BeforeInsert()
  @BeforeUpdate()
  getTitle() {
    if (!this.title) {
      return;
    }
    this.title = this.title.toUpperCase();
  }

  getEmail() {
    if (!this.email) {
      return;
    }
    this.email = this.email.toLowerCase().trim();
  }

  async getPassword() {
    if (!this.password) {
      return;
    }
    this.password = await bcrypt.hash(this.password, 12);
  }

*/
}

