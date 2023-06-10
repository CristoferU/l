import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BeforeInsert, BeforeUpdate, Entity } from 'typeorm';

@Controller('products')
export class ProductsController {
  title: any;
  email: any;
  constructor(private readonly productsService: ProductsService) {}
  @Get()
  getProducts() {
    return ["Toyota","Mercedes", "Suzuki"];
  }

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
  @Entity('products')


@BeforeInsert()
@BeforeUpdate()

getTitle(){ 
    if(!this.title){ 
        return;
    }
    this.title =this.title.toUpperCase();
}

getEmail(){ 
    if(!this.email){ 
        return;
    }
    this.email = this.email.toLowerCase().trim();

}
asyn hash Password(){ 
    if(!this.password){ 
        return;
    }
    this.passward = await Bcrypt.hash(this.password, 12)
}
}
