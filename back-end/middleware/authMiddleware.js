import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from './../models/userModel.js'

const protect = asyncHandler(async (req, res, next) => {
    let token

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith('Bearer')
    ) {
        // console.log('hello')

        try {
            token = req.headers.authorization.split(' ')[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            // console.log(decoded)

            req.user = await User.findById(decoded.id).select('-password')
            //console.log(req.user)

            next()
        } catch (error) {
            console.error(error)
            res.status(401)
            throw new Error('Not Authorized, Token Failed')
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('Not Authorized, No Token')
    }
})

export { protect }
