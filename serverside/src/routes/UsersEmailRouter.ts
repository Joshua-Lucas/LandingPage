import { Router } from 'express'
import { UsersEmailController } from '../controllers/UsersEmailControler'

const router = Router()

router.route('/').post(UsersEmailController.create)

export default router
