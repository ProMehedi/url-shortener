import express from 'express'
import dotenv from 'dotenv'
import Mongoose from 'mongoose'
import colors from 'colors'
import shortUrl from './models/shortUrl.js'

// Enable .env
dotenv.config()

// Enable MongoDB Connection
Mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()

// Configure Ejs
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
  const shortUrls = await shortUrl.find({})

  res.render('index', { shortUrls })
})

app.post('/shorturl', async (req, res) => {
  try {
    const newUrl = new shortUrl({ full: req.body.url })
    await newUrl.save()
  } catch (err) {
    console.log(err)
  }
  res.redirect('/')
})

app.get('/:url', async (req, res) => {
  const getShortUrl = await shortUrl.findOne({ short: req.params.url })
  if (getShortUrl) {
    getShortUrl.clicks++
    await getShortUrl.save()
    res.redirect(getShortUrl.full)
  } else {
    res.status(404).send('Url Not Found')
  }
})

// Define Variable
const PORT = process.env.PORT || 5000
const NODE_ENV = process.env.NODE_ENV || 'development'

// Not Found Middleware
// app.use(notFound)

// Error Handler Middleware
// app.use(errorHandler)

app.listen(
  PORT,
  console.log(`Server running in ${NODE_ENV} mode on port ${PORT}`.yellow.bold)
)
