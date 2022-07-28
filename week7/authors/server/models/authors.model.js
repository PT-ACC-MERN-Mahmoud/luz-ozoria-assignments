const mongoose = require('mongoose');

const AuthorSchema = mongoose.Schema(
{
    name: {
        type: String,
        required: [true, 'Author name is required!'],
        minlength: [3, 'Author name must be at least 3 characters!']
    }
},
{
    timestamps: true,
},
);

const Author = mongoose.model('author', AuthorSchema);
module.exports = Author;