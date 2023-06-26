import { PartialType } from '@nestjs/swagger';
import { BaseProductDto } from './base-product.dto';
import { Expose, Exclude } from "class-transformer"


@Exclude()
export class ReadProductDto extends PartialType(BaseProductDto) {
    @Expose()
    readonly title;
    
    @Expose()
    readonly price;

    @Expose()
    readonly image;

    
}