import { Request, Response } from "express";
import { productRepository } from "../repositories/productRepository";


export class ProductController {
    async create(req:Request, res:Response){
        const { name, codeProduct, codeBars, cost ,saleValue, brand, validity, category} = req.body

        if (!name) {
            return res.status(400).json({menssage: 'the name is mandatory' })
        }
        
        try {
            const newProduct = productRepository.create({
                name, codeProduct, codeBars, cost ,saleValue, brand, validity, category
            })
            console.log(newProduct)

    await productRepository.save(newProduct)

            return res.status(201).json(newProduct)
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: 'internal server error'})
        }

    }
}