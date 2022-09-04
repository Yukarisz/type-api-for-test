import {Router} from 'express'
import { SalesController } from './controllers/SalesController'
import { SubjectController } from './controllers/SubjectController'

const routes = Router()


routes.post('/subject', new SubjectController().create)
routes.post('/sales', new SalesController().create)

export default routes
