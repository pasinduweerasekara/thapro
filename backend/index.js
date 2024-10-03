const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const connectDb = require('./config/dbconnection')
const dotenv = require('dotenv').config()
const cors = require('cors');

connectDb()
const app = express()

// middlewares
app.use(express.json())

// cors
const corsOptions = {
    origin: 'http://localhost:5173', // frontend's domain
    optionsSuccessStatus: 200 // Some browsers (like IE) may require this for HTTP 204 responses
  }

app.use(cors(corsOptions))

const port = process.env.PORT

app.use("/api/products", require('./routes/productRoute'))

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running http://localhost:${port}`)
})