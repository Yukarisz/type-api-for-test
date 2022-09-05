import { AppDataSource } from "../data-source";
import { Market } from "../entities/Market";

export const marketRepository = AppDataSource.getRepository(Market)