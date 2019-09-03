// var obj = {
//     name: 'Елена'
// };
// var stringObj = JSON.stringify(obj);
// console.log (typeof stringObj);
// console.log (stringObj);

// var personString = '';
// var personString = '{"name": "Елена"}';
// var personString = '{"name": "Елена", "age": 25}';
// var person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
title: 'Some title',
body: 'Некоторый текст'
};
var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('note.json', originalNoteString);
var noteString = fs.readFileSync('note.json');

var note = JSON.parse(noteString);
//note
console.log(typeof note);
console.log(note.title);