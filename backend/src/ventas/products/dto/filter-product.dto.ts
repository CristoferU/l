import { IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "./pagination-products.dto";

export class FilterProductDto extends PaginationDto {
    @IsOptional()
    @IsString(isStringValidationOptions())
    readonly title:string;

    @IsOptional()
    @IsNumber(isNumberValidationOptions())
    readonly price:number;
}