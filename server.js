const express = require('express');
const app = express();
const users = require('./routes/user.js');
const posts = require('./routes/post.js');

app.get('/getcookies', (req, res) => {  // Route to set cookies in the browser
    res.cookie('name', 'express');
    res.send('sent you some cookies');
});

app.get('/', (req, res) => {
    res.send('Server is listening on port 3000');
});

app.use('/users', users); // Mount the users router and /users is common for all user routes so use it here

app.use('/posts', posts); // Mount the posts router and /posts is common for all post routes so use it here

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});