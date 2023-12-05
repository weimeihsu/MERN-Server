import express from 'express'
import { generateImage } from '../controllers/openAiController.js'
const router = express.Router()


router.post('/genimage', generateImage)

export default router