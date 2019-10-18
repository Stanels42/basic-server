'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// app.get('/', (request, responce) => responce.send('Hello World'));
app.get('/Hello', (request, responce) => responce.send('Hello'));

app.use(express.static('./public'));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
