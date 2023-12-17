
const express = require('express');
const router = express.Router();
const { getAllElementsWithTopics } = require('../controllers/elementController');

router.get('/elements', getAllElementsWithTopics);

module.exports = router;
