const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbconnection");
const errorHandler = require("./middlewares/errorHandler");

// Connect to the database
connectDb();

const app = express();

// Middleware
app.use(express.json()); // Parse JSON bodies

// CORS options
const corsOptions = {
  origin: "http://localhost:5173", // Frontend's domain
  optionsSuccessStatus: 200, 
};

app.use(cors(corsOptions));

// Define the port
const port = process.env.PORT || 5000; // Default to 5000 if PORT is not defined

// Routes
app.use("/api/orders", require("./routes/orderRoute"))
app.use("/api/products", require("./routes/productRoute"))
app.use("/api/customer", require("./routes/customerRoute"))
app.use("/api/payment", require("./routes/paymentRoute"))

// Error handling middleware
app.use(errorHandler);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
