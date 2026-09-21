const express = require('express');
const server = express();

const myClassmates = [
    { id: 101, name: 'Charishma', dept: 'CSE' },
    { id: 102, name: 'Rohit', dept: 'CSE' },
    { id: 103, name: 'Manoj', dept: 'CSE' },
    { id: 104, name: 'Somya', dept: 'CSE' },
    { id: 105, name: 'Kiran', dept: 'CSE' }
];

server.get('/', (req, res) => res.send('<h2>Student Portal Base URL</h2>'));
server.get('/students', (req, res) => res.json({ total: myClassmates.length, students: myClassmates }));
server.get('/about', (req, res) => res.send('<p>This route gives info about the server setup.</p>'));

server.listen(3000, () => console.log('Listening on port 3000...'));