import { IsString } from "class-validator";
import { IsNotEmpty, IsOptional } from "class-validator/types/decorator/decorators";


export class BaseCategoriesDto{
    @IsString(IsStringValidationOption())
    @IsNotEmpty()
    readonly title:string


    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly description:string
    
}