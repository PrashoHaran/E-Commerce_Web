// index.js

// Step 1: Initialize tracing before anything else
require('./tracing');

// Step 2: Import your express app
const app = require('./app');

// Step 3: Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server is running at http://localhost:${PORT}`);
});
