import {Router} from 'express'
import { MarketController } from './controllers/MarketController'
import { ProductController } from './controllers/ProductController'

const routes = Router()

routes.post('/products', new ProductController().create)
routes.post('/market', new MarketController().create)

export default routes
