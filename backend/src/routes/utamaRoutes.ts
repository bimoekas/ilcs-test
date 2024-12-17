import { Router } from 'express'
import { getUtama, createUtama } from '../controllers/utamaController'

const router: Router = Router()

router.get('/', getUtama);
router.post('/', createUtama);

export default router