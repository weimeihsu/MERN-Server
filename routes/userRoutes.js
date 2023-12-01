import express from 'express'
import { authUser, registerUser, logoutUser, getUserProfile, updateUserProfile } from '../controllers/userConstroller.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.post('/', registerUser)
router.post('/auth', authUser)
router.post('/logout', logoutUser)
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)
// router.get('/profile', getUserProfile)
// router.put('/profile', updateUserProfile)

export default router