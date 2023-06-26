import { PartialType } from '@nestjs/swagger';
import { BaseCategoriesDto} from './base-categories.dto';


export class UpdateCategoriesDto extends PartialType(BaseCategoriesDto) {}
