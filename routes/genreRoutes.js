import express from 'express'
import { getAllGenres, createGenre } from '../controllers/genreController.js'

const router = express.Router()

// GET all items
router.get('/', getAllGenres)

router.post('/', createGenre)
// module.exports = router
export default router