import express from 'express'
import urlRouter from './Routes/url.routes.js'
import { connectDB } from './Database/dbConn.js'

const app = express()

app.use(express.json())

app.use('/', urlRouter)

app.use('*', (req, res) => {
    res.status(404).json('Not found')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
