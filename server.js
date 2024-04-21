const express = require('express');
const html_routes = require('./routes/html-routes');
const api_routes = require('./routes/api-routes');
const PORT = process.env.PORT || 3001;

// Create an Express application
const app = express();

// Middleware to parse incoming request bodies as urlencoded or JSON
// Order matters: middleware runs in the order they are declared
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static("public"));

// Mount HTML routes middleware
app.use(html_routes);

// Mount API routes middleware
app.use(api_routes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
