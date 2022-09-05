import { Request, Response } from "express";
import { marketRepository } from "../repositories/marketRepository";


export class MarketController {
    async create(req:Request, res: Response){
        const {name, description, produ ,amount , saleDate, payment} = req.body

try {
    const newMarket = marketRepository.create({name, description, produ, amount, saleDate, payment})
    await marketRepository.save(newMarket)
    
    return res.status(201).json(newMarket)
    
} catch (error) {
    console.log(error);
    return res.status(500).json({message: 'internal server error'})
}



    }
}