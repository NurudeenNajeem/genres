const express = require('express');
const mongoose = require('mongoose');
const genres = require('./routes/genres'); // Corrected the path
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/vividly')
    .then(() => console.log('Connected to my database...'))
    .catch(err => console.error('Not connected to my database...', err));

app.use(express.json());
app.use('/api/genres', genres); // Corrected the route


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}`)); // Corrected the port variable

// return ;