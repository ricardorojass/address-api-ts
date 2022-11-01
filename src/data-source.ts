import "reflect-metadata"
import { DataSource } from "typeorm"
import { Address } from "./address/entities/address.entity"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "",
    database: "addressapp",
    synchronize: true,
    logging: false,
    entities: [Address],
    migrations: [],
    subscribers: [],
})
