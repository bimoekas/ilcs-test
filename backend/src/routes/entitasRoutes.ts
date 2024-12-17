import { Router } from 'express'
import { getEntitas, createEntitas } from '../controllers/entitasController'

const router: Router = Router()

router.get('/', getEntitas);
router.post('/', createEntitas);

export default router