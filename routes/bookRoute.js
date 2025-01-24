const express = require('express');
// const { create } = require('../models/BookModels');
const router = express.Router();
const { createBooks, getBooks, getBookById, updateBooks ,deleteBooks } = require('../controllers/bookController')

router.post('/create', createBooks);
router.get('/get', getBooks);
router.put('/update/:id', updateBooks);
router.get('/get/:id', getBookById);
router.delete('/delete/:id', deleteBooks);

module.exports = router;