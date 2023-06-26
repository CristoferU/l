import { PartialType } from '@nestjs/swagger';
import { Expose, Exclude } from "class-transformer"
import { BaseCategoriesDto } from './base-categories.dto';


@Exclude()
export class ReadCategoriesDto extends PartialType(BaseCategoriesDto) {
    @Expose()
    readonly title;
    
}