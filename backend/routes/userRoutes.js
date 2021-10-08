const express = require('express')
const { enrollCourse } = require('../controllers/courseController')
const router = express.Router()
const {registerUser,authUser, getUserProfile} = require('../controllers/userController')
enrollCourse
const protect = require('../middleware/authMiddleware')

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/enrollcourse/:id').post(protect,enrollCourse)
router.route('/profile').get(protect,getUserProfile)



module.exports = router