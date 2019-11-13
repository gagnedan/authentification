const express = require('express');
const router = new express.Router();
const category_controller = require('../controllers/category')

router.route('/pr/category/:id').get(category_controller.category_detail);

module.exports = router;