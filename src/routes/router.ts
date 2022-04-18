import { Router } from "express";

import * as apiControler from "../controlers/apiControler"

const router = Router()

router.get('/ddd', apiControler.getDdds)
router.get('/plans', apiControler.getPlans)
router.get('/taxes', apiControler.getTaxes)

export default router;