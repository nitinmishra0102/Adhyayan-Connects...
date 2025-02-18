const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Example usage
const dbHost = process.env.DB_HOST;
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;
const dbName = process.env.DB_NAME;

const jwtToken = process.env.JWT_SECRET;
const port = process.env.PORT 
console.log(`Database info - Host: ${dbHost}, User: ${dbUser}, password:${dbPassword}`);

module.exports = {
  dbHost,
  dbUser,
  dbPassword,
  dbName,
  jwtToken,
  port
};
