const express = require('express');
const route = express.Router();

const { getTasks, postTasks, updateTasks, deleteTasks } = require('../controller/tasks');

route.route('/').get(getTasks).post(postTasks).put(updateTasks).delete(deleteTasks);

module.exports = route;