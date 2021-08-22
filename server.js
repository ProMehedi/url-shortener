import express from 'express'
import Mongoose from 'mongoose'
import colors from 'colors'

// Enable MongoDB Connection
Mongoose.connect('mongodb://localhost/urlShortener', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const app = express()

// Configure Ejs
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/shorturl', (req, res) => {})

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
