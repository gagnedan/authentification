const express = require('express');
const router = new express.Router();
const category_controller = require('../controllers/category')
const auth_controller = require('../controllers/auth')

router.route('/').get(auth_controller.user);
router.route('/auth/login').post(auth_controller.login);
router.route('/pr/category/:id').get(category_controller.category_detail);

module.exports = router;