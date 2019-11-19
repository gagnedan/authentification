const express = require('express');
const router = new express.Router();
const category_controller = require('../controllers/category')
const auth_controller = require('../controllers/auth')
const company_controller = require('../controllers/company')

router.route('/').get(auth_controller.user);
router.route('/auth/login').post(auth_controller.login);
router.route('/company').get(company_controller.all);
router.route('/pr/category/:id').get(category_controller.category_detail);

module.exports = router;