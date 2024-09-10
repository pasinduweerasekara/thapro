const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const connectDb = require('./config/dbconnection')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

// middlewares
app.use(express.json())

const port = process.env.PORT

app.use("/api/products", require('./routes/productRoute'))

app.use(errorHandler)

app.listen(port,()=>{
    console.log(`Server running on port ${port}`)
})