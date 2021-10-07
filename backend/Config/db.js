const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async()=>{
    // console.log(process.env.MONGO_URI);
    try {

        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true
        })

        console.log(`MongoDB connect to ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`ERROR: ${error.message}`)
        process.exit(1)
        
    }
}

module.exports = connectDB