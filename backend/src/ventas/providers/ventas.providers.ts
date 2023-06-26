import { Inject } from "@nestjs/common";
import { CategoryEntity } from "src/models/category.model";
import { ProductEntity } from "src/models/product.model";
import { DataSource } from "typeorm";

export const ventasProviders = [
    {
        privide: RepositoryEnum.PRODUCT_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(ProductEntity),
        inject:[DataSourceEnum, PG_DATA_SOURCE]
    },
    {
        privide: RepositoryEnum.CATEGORIES_REPOSITORY,
        useFactory: (dataSource: DataSource) =>
        dataSource.getRepository(CategoryEntity),
        inject:[DataSourceEnum, PG_DATA_SOURCE]
    },
]