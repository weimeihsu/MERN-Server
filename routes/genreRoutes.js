import express from 'express'
import { getAllGenres, createGenre, deleteGenre, updateGenre } from '../controllers/genreController.js'

const router = express.Router()

// GET all items
router.get('/', getAllGenres)

router.post('/', createGenre)
// module.exports = router

router.route('/genre/:id').delete(deleteGenre).patch(updateGenre)
export default router