const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(
            'mongodb+srv://desire:d123@cluster0.ftdwn82.mongodb.net/mini-mall?retryWrites=true&w=majority&appName=Cluster0'
        );
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch(err) {
        console.error(err);
        process.exit(1);
    }
};

module.exports = connectDB;