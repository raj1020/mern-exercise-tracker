const mongoose = require('mongoose');

consyt Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, //this trims whitespaces after string. For eg. if someone types whitespaces then they are trimmed off. 
        minlength: 3
    },
}, {
    timestamps: true,
} );

const User = mongoose.model('User', userSchema);

module.exports = User;



