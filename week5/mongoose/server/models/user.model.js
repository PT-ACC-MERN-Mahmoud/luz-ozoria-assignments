const mongoose = require('mongoose');

// Create a Schema for Users
const UserSchema = new mongoose.Schema({
    name: { type: String },
    age: { type: Number }
}, { timestamps: true })
   // create a constructor function for our model and store in variable 'User'
const User = mongoose.model('User', UserSchema);

module.exports = User;
