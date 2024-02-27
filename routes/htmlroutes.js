const path = require('path');
const html = require('express').Router();

//Path for notes page
html.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'))
});

//Path for homepage
html.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = html;