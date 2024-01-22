import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: false
    },
    password: {
        type: String,
        require: false,
        unique: true
    }
},
    { timestamps: true }
)

const User = mongoose.model('User', userSchema)

export default User;

// console.log();