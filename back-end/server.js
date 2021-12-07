import express from 'express'

// DATABASE config
import connectDB from './config/db.js'

// proccessing .env
import dotenv from 'dotenv'

// console colors
import colors from 'colors'

// Custom error handling
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

// ROUTING
import universityRoutes from './routes/universityRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()

connectDB()

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/universities', universityRoutes)
app.use('/api/users', userRoutes)

// for handling all 404 ERRORS
app.use(notFound)

// Custom middleware with ERROR handler
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(
    PORT,
    console.log(
        `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow
            .bold
    )
)
