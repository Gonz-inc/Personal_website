const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/main');
const ctrlAbout = require('../controllers/about');


/* GET home page. */
router.get('/', ctrlMain.index);

/* GET the about pages */
router.get('/about', ctrlAbout.about);
router.get('/about/contact', ctrlAbout.contact);
router.get('/about/projects', ctrlAbout.projects);



module.exports = router;
