const express = require('express')
const router = express.Router()
const {registerUser,authUser, getUserProfile} = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/profile').get(protect,getUserProfile)



module.exports = router