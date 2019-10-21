'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

app.get('/Hello', (request, responce) => responce.send('Hello'));

app.use(express.static('./public'));
// app.get('/', (request, responce) => responce.send('<link rel="stylesheet" href="assets/css/reset.css">'));

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));
