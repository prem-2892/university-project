import User from './../models/userModel.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'

// @desc   Auth USER & and get TOKEN
// @Route  POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    //res.send(email)
    //console.log(user.password)

    // && (await user.matchPassword(password))

    if (user && (await user.matchPassword(password))) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateToken(user._id),
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email and Password')
    }
})

// @desc   Get USER PROFILE
// @Route  GET /api/users/profile
// @access PRIVATE
const getUserProfile = asyncHandler(async (req, res) => {
    //const user = await User.findById(req.user._id)

    const user = await User.findById(req.user._id)

    // return res.send('Success')
    if (user) {
        //console.log('hello')
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User Not Found')
    }
})

// @desc   Update USER PROFILE
// @Route  PUT /api/users/profile
// @access PRIVATE
const updateUserProfile = asyncHandler(async (req, res) => {
    //const user = await User.findById(req.user._id)

    const user = await User.findById(req.user._id)

    // return res.send('Success')
    if (user) {
        //console.log('hello')
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('User Not Found')
    }
})

export { authUser, getUserProfile, updateUserProfile }
