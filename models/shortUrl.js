import mongoose from 'mongoose'
import shortid from 'shortid'

const shortUrl = shortid.generate()

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
