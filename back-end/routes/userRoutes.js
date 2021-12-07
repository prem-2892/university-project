import express from 'express'
import { protect } from '../middleware/authMiddleware.js'
import {
    authUser,
    getUserProfile,
    updateUserProfile,
} from '../controllers/userController.js'

const router = express.Router()

router.post('/login', authUser)
router
    .route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router
