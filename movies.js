const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Movies API is working!' });
});

module.exports = router;
