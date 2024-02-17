const mongoose = require('mongoose');

mongoose.connect(
 process.env.MONGODB_URI || "mongodb://localhost:27017?sm-network",
 {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 }
);

module.exports = mongoose.connection; // connection might relate to the initial const doubt?

