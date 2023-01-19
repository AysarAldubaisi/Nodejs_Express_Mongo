const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () =>{
    try{
        // mongodb connection string
       
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log('MongoDB connection succeeded :'+ con.connection.host)
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB