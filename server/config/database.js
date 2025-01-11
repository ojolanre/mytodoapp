const mongoose = require('mongoose');
const logger = require('../utils/logger');

// Define the connectDB function
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    logger?.('info', `MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    logger?.('error', `Database connection error: ${err.message}`);
    process.exit(1); 
  }
};

module.exports = connectDB;


