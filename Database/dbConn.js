import mongoose from 'mongoose'

export const connectDB = mongoose.connect("mongodb://ososos:tDEAbbTwWCZt1qQL@cluster0-shard-00-00.cwva7.mongodb.net:27017,cluster0-shard-00-01.cwva7.mongodb.net:27017,cluster0-shard-00-02.cwva7.mongodb.net:27017/?ssl=true&replicaSet=atlas-7byo7a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=dubbingMasterAi"
).then(() => {
    console.log('Connected successfully to MongoDB')
}).catch(() => {
    console.log('Error connecting to MongoDB')
})
