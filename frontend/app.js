const express = require('express');
const path = require('path');
const app = express();

// Serve the static HTML file
app.use(express.static(path.join(__dirname, 'public'))); // Replace 'public' with the directory containing index.html

const PORT = 8000; // Or any other available port
app.listen(PORT, () => console.log(`Frontend running at http://localhost:${PORT}`));
