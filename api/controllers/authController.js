
import User from '../models/userModel.js'
import bycryptjs from 'bcryptjs';
import { errorHandaler } from '../utils/error.js';

export const signup = async (req, res, next) => {

    const { userName, email, password } = req.body;
    const condition = ` ${!userName}  || ${!email} || 
    !password || userName == '' || email === '' || password === '' `;

    if (!userName || !email || !password ||
        userName == '' || email === ''
        || password === '') {
        // return res.status(400).json({ msg: 'All fiels are required' })
        next(errorHandaler(400, 'All fields are required'))
    }

    const hashPassword = bycryptjs.hashSync(password, 10);

    const newUser = new User({
        userName,
        email,
        password: hashPassword
    });

    try {
        await newUser.save();
        res.json('Signup Success');
    } catch (error) {
        next(error)
        // res.status(500).json({ msg: error.message })
    }

}

// ()