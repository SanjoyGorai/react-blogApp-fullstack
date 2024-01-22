
import User from '../models/userModel.js'

export const signup = async (req, res) => {

    const { userName, email, password } = req.body;
    const condition = ` ${!userName}  || ${!email} || 
    !password || userName == '' || email === '' || password === '' `;

    if (!userName || !email || !password ||
        userName == '' || email === ''
        || password === '') {
        return res.status(400).json({ msg: 'All fiels are required' })
    }
    const newUser = new User({
        userName,
        email,
        password
    });

    await newUser.save();
    res.json('Signup Success');

}

// ()