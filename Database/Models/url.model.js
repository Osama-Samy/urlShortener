import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({

    originalUrl: { 
        type: String,
        required: true 
    },
    shortUrl: { 
        type: String,
        required: true
    },
    urlCode: { 
        type: String,
        required: true 
    },
    clicks: { 
        type: Number, 
        default: 0
    },
    date: { 
        type: Date, 
        default: Date.now 
    }
})

export default mongoose.model('Url', urlSchema)
