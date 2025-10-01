const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Server is listening on port 3000');
});

//Users Routes
app.get('/users', (req, res) => {
    res.send('GET for Users');
});

app.get('/users/:id', (req, res) => {
    res.send('GET for Users id');
});

app.post('/users', (req, res) => {
    res.send('POST for Users');
});

app.delete('/users/:id', (req, res) => {
    res.send('DELETE for Users id');
});

//Posts Routes
app.get('/posts', (req, res) => {
    res.send('GET for Posts');
});

app.get('/posts/:id', (req, res) => {
    res.send('GET for Posts id');
});

app.post('/posts', (req, res) => {
    res.send('POST for Posts');
});

app.delete('/posts/:id', (req, res) => {
    res.send('DELETE for Posts id');
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});