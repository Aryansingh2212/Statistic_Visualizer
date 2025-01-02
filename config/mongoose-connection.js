require('dotenv').config();
const mongoose = require('mongoose');
const dbgr = require('debug')("development:mongoose");
mongoose.connect(process.env.MONGO_URI || 'mongodb+srv://aryansingh:aryansingh22@cluster0.jszd7.mongodb.net/Statistics?retryWrites=true&w=majority')
    .then(() => {
        dbgr("Connected to MongoDB");
    })
    .catch((err) => {
        dbgr("MongoDB connection error:", err.message);
    });

module.exports = mongoose.connection;