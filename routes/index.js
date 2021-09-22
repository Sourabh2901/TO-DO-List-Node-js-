const express = require("express");

const router = express.Router();
// const homeController = require('../controllers/home_controller');
const homeController1 = require('../controllers/home_controller1');

router.get('/',homeController1.home);
router.post('/add-task',homeController1.addTask);
router.post('/delete-task',homeController1.deleteTask);

console.log("router loaded");

module.exports = router;