const express = require('express');
const router = express.Router();
const {getTransactions} = require('../controllers/transaction_controller');

router
    .route('/')
    .get(getTransactions);

module.exports = router;