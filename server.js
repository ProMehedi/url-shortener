import express from 'express'
import colors from 'colors'

// Enable MongoDB Connection
// connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
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
