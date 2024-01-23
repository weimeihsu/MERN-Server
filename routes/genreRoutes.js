import express from 'express'
import { getAllGenres } from '../controllers/genreController.js'

const router = express.Router()

// GET all items
router.get('/', getAllGenres)

// module.exports = router
export default router