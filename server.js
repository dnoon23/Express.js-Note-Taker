const express = require('express');

const apiRoutes = require('./routes/apiroutes.js');
const htmlRoutes = require('./routes/htmlroutes.js');

const app = express();

//Opens the port for the program
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//Connects the routes declaired above
app.use('/api', apiRoutes);
app.use('*', htmlRoutes);

app.listen(PORT, () => { console.log(`Listening at http://localhost:${PORT}`) });