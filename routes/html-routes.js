const router = require('express').Router();
const path = require('path');

// Route to serve 'index.html' when a GET request is made to the root URL
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route to serve 'notes.html' when a GET request is made to the '/notes' URL
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

module.exports = router;
