import { AppDataSource } from "../data-source";
import { Sales } from "../entities/Sales";

export const salesRepository = AppDataSource.getRepository(Sales)