const express = require('express');
const router = new express.Router();
const db = require('../services/database');

/**
 * METHOD: GET
 * ROUTE: /todo
 * PURPOSE: Get all tasks
 */
router.route('/pr/category/:id').get(async (req, res) => {
  const id = req.params.id;
  const categories = await db
    .select('ID_TOC as value', 'HEADER_NAME as text')
    .from('PR_TOC')
    .where('ID_COMPANY', id)
    .orderBy('SEQ_ORDER');

  res.json({
    categories
  });
});
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