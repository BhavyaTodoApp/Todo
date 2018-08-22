const express = require('express');
const router = express.Router();
const ctrlTasks = require('../controllers/taskManagement.controller.js');

router.route('/tasks')
.get(ctrlTasks.getAllTask)
.post(ctrlTasks.addTask);

router.route('/tasks/:tasksId')
.put(ctrlTasks.updateTasks);

module.exports = router;