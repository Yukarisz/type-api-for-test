import {Router} from 'express'
import { ProductController } from './controllers/ProductController'
import { SalesController } from './controllers/SalesController'


const routes = Router()


routes.post('/products', new ProductController().create)
routes.post('/sales', new SalesController().create)

export default routes
