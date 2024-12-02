import express from 'express'
import urlRouter from './Routes/url.routes.js'
import { connectDB } from './Database/dbConn.js'
import cors from 'cors'
const app = express()

app.use(express.json())

app.use(cors())
app.use('/', urlRouter)

app.use('*', (req, res) => {
    res.status(404).json('Not found')
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
