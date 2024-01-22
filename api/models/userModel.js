import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    userNmae: {
        type: String,
        require,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        unique: false
    }
},
    { timestamps: true }
)

const User = mongoose.model('User',userSchema)

export default User;

// console.log();