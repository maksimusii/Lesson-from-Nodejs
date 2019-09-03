const fs = require('fs');

var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title);
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }

};
var getNote = (title) => {
    var notes = fetchNotes();
    var filterdNotes = notes.filter((note) => note.title === title);
    return filterdNotes[0];
};
var getAll = () => {
   return fetchNotes();
};
var removeNote = (title) => {
    var notes = fetchNotes();
    var filterdNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterdNotes);
    return notes.length !== filterdNotes.length;
};


var fetchNotes = () => {

    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var logNote = (note) => {
    console.log ('--');
    console.log(`Имя заметки: ${note.title}`);
    console.log(`Текст заметки: ${note.body}`);
};
module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};