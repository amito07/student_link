const express = require('express')
const dotenv = require("dotenv");
const connectDB = require('./Config/db');
const userRoute = require('./routes/userRoutes')
const courseRoute = require('./routes/courseRoutes')

dotenv.config()

connectDB();
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 5000

app.use('/api/users',userRoute)
app.use('/api/course',courseRoute)
app.listen(PORT,console.log(`Server is Running at ${PORT}`))
