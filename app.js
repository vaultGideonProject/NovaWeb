const express = require('express');
const { Logging } = require('@google-cloud/logging');
const app = express();
const port = process.env.PORT || 3000;

// Initialize Google Cloud Logging
const logging = new Logging();
const log = logging.log('app-company-log'); // Set the log name
const resource = { type: 'global' };

// Middleware for logging requests
app.use((req, res, next) => {
  const message = `Request: ${req.method} ${req.url}`;
  const entry = log.entry({ resource }, { message });
  
  // Write the log entry
  log.write(entry).catch(console.error);
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to the App Company website!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
