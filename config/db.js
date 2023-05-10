const mongoose = require('mongoose')
const colours = require('colours')
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('connected')

    } catch(error){
        console.log('MONGO connect Error'.bgRed.white)
    }
}