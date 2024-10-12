const express = require('express');
const cors = require('cors'); // Import the CORS middleware
const app = express();
const PORT = process.env.PORT || 3000;

// Use CORS middleware
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello, This is the second application!');
});

app.get('/secret', (req, res) => {
    res.send('You found a new secret! I am the second appliaction!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});