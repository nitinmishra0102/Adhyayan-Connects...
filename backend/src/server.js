const express = require('express');
const cors = require('cors');
const app = require('./app')

const { port } = require('./database/env');


// Define the port
const PORT = port || 5000;

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT} `);
});













// backend/server.js

// const express = require("express");
// const dotenv = require("dotenv");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const db = require("./config/db");
// const userRoutes = require("./routes/userRoutes");
// const jobRoutes = require("./routes/jobRoutes");
// const applicationRoutes = require("./routes/applicationRoutes");
// const errorHandler = require("./middlewares/errorHandler");

// dotenv.config();

// const app = express();

// // Middlewares
// app.use(cors());
// app.use(bodyParser.json());
// app.use(express.json());

// // Routes
// app.use("/api/users", userRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationRoutes);

// // Error Handler Middleware
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
