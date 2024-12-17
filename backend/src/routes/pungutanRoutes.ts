import { Router } from 'express';

import { createPungutan, getPungutan } from '../controllers/pungutanController';

const router: Router = Router()

router.get('/', getPungutan);
router.post('/', createPungutan);

export default router