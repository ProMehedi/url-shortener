import mongoose from 'mongoose'

// const shortUrl = shortid.generate()
const shortUrl = Math.floor((1 + Math.random()) * 0x10000)
  .toString(16)
  .substring(1)

const shortUrlSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: {
    type: String,
    required: true,
    default: shortUrl.toLowerCase(),
  },
  clicks: { type: Number, required: true, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
})

export default mongoose.model('ShortUrl', shortUrlSchema)
