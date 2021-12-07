import express from 'express'
import {
    getUniversities,
    getUniversityById,
} from '../controllers/universityController.js'

const router = express.Router()

router.route('/').get(getUniversities)

router.route('/:id').get(getUniversityById)

export default router
