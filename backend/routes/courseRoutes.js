const express = require('express')
const { registerCourse,getAllCourse } = require('../controllers/courseController')
const router = express.Router()
const adminprotector = require('../middleware/adminMiddleware')
const protect = require('../middleware/authMiddleware')

router.route('/addcourse').post(adminprotector,registerCourse)
router.route('/getallcourse').get(protect,getAllCourse)

module.exports = router