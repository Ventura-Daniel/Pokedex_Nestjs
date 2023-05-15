import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsPositive, Min, isPositive } from "class-validator";

export class PaginationDto {

    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    @IsPositive()
    @Min(1)
    limit?: number;

    
    @Type(() => Number)
    @IsOptional()
    @IsNumber()
    @Min(0)
    offset?: number;
}