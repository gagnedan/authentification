const express = require('express');
const router = new express.Router();
const db = require('../services/database');
const category_controller = require('../controllers/category')

/**
 * METHOD: GET
 * ROUTE: /todo
 * PURPOSE: Get all tasks
 */
router.route('/pr/category/:id').get(category_controller.category_detail);
/**
 * METHOD: POST
 * ROUTE: /todo
 * PURPOSE: Create new task
 */
router.route('/todo').post(async (req, res) => {
  const {
    task
  } = req.body;
  const newTodo = await db('todo')
    .insert(task)
    .then(item => {
      return item.rowCount;
    });

  if (newTodo === 1) {
    return res.status(201).json({
      message: 'Todo created successfully'
    });
  }
});

module.exports = router;