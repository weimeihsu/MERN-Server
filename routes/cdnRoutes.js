import express from 'express'
import { getAllCNDs } from '../controllers/cdnController.js'

const router = express.Router()

// GET all items
router.get('/', getAllCNDs)

// module.exports = router
export default router