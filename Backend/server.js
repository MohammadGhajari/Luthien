const dotenv = require('dotenv');
// Load config.env only in development (Render/Railway uses environment variables)
// In production, hosting platforms provide environment variables directly
if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './config.env' });
}

// Validate required environment variables
const requiredEnvVars = ['DATABASE'];
const missingEnvVars = requiredEnvVars.filter((varName) => !process.env[varName]);

if (missingEnvVars.length > 0) {
  console.error('❌ Missing required environment variables:');
  missingEnvVars.forEach((varName) => {
    console.error(`   - ${varName}`);
  });
  console.error('\n💡 Please set these variables in your hosting platform (Render/Railway) or config.env file.');
  process.exit(1);
}

const app = require('./app');
const mongoose = require('mongoose');

process.on('uncaughtException', (err) => {
  console.log(err);
  console.log('uncaughtExeption! Shutting down...');
  process.exit(1);
});

console.log("connection string: ", process.env.DATABASE);
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('✅ Connected to database');
  })
  .catch((err) => {
    console.error('❌ Database connection error:', err.message);
    process.exit(1);
  });

const port = process.env.PORT || 8002;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server running on port: ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log(err);
  console.log('unhandledRejection! Shutting down...');
  server.close(() => {
    process.exit(1);
  });
});
