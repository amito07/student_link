const express = require('express')
const { registerCourse } = require('../controllers/courseController')
const router = express.Router()
const adminprotector = require('../middleware/adminMiddleware')

router.route('/addcourse').post(registerCourse)

module.exports = router