const { v4: uuidv4 } = require('uuid');
const api = require('express').Router();
const { readAndAppend, readFromFile, remove } = require('../helpers/fsUtils');


//Checks if there any notes in the database and posts them to the page
api.get("/notes", function (req, res)  {
  readFromFile('./db/db.json').then((data) =>
  res.json(JSON.parse(data)))
});

//Used to create new notes
api.post("/notes", function (req, res) {
  //New note
  const note ={
    //adds an id to each note for delete to function properly
    id: uuidv4(),
    title: req.body.title,
    text: req.body.text
  }
  //Adds the note to the saved notes on the side of the page
  readAndAppend(note, './db/db.json')
  //Adds the notes to the page without the need for a page refresh
  readFromFile('./db/db.json').then((data) =>
  res.json(JSON.parse(data)))

})

//Deletes selected note using the id added when note is created
api.delete("/notes/:id", (req, res) => {
  //Passes the selected id to the remove helper
    const id = req.params.id; 
    remove(id, './db/db.json')
  
    //Adds the notes to the page without the need for a page refresh
    readFromFile('./db/db.json').then((data) =>
    res.json(JSON.parse(data)))
}); 


module.exports = api;