import { IsString } from "class-validator";
import { IsNotEmpty, IsNumber, IsOptional, IsPositive } from "class-validator/types/decorator/decorators";


export class BaseProductDto{
    @IsString(IsStringValidationOption())
    @IsNotEmpty()
    readonly title:string

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly price:number

    @IsString()
    @IsOptional()
    @IsNotEmpty()
    readonly description:string

    @IsString()
    @IsNotEmpty()
    readonly image:string
    
}