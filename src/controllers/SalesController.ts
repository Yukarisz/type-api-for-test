import { Request, Response } from "express";
import { salesRepository } from "../repositories/salesRepository";

export class SalesController {
    async create(req:Request, res: Response){
        const {name, description} = req.body

try {
    const newSales = salesRepository.create({name, description})
    await salesRepository.save(newSales)
    
    return res.status(201).json(newSales)
    
} catch (error) {
    console.log(error);
    return res.status(500).json({message: 'internal server error'})
}



    }
}