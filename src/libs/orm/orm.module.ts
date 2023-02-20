import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";
import DatabaseConfiguration from "./database.configuration";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: DatabaseConfiguration,
            inject: [ConfigService],
        })
    ],
    controllers: [],
    providers: [
        ConfigService
    ],
})
export class OrmModule { }