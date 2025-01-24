const mongoose = require('mongoose')
const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://dinesh1124k:7780757556@cluster0.tmviz.mongodb.net/kkkkkk")
        console.log("MongoDB is connected")
    } catch (error) {
        console.log("Error: bigib",error.message)
    }
}
module.exports = connectDB