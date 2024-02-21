const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const apiRoutes = require('./routes/api.routes');
const htmlRoutes = require('./routes/html.routes');

const PORT = 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {console.log(`Listening at http://localhost:${PORT}`)});