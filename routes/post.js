const express = require('express');
const router = express.Router();

//Posts Routes
router.get('/', (req, res) => {
    res.send('GET for Posts');
});

router.get('/:id', (req, res) => {
    res.send('GET for Posts id');
});

router.post('/', (req, res) => {
    res.send('POST for Posts');
});

router.delete('/:id', (req, res) => {
    res.send('DELETE for Posts id');
});

module.exports = router;