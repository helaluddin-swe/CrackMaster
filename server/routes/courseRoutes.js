const express = require('express');
const { getCourses, getCourseBySlug, seedCourses } = require('../controllers/CourseController.js');
const router = express.Router();


router.get('/', getCourses);
router.get('/:slug', getCourseBySlug);
router.post('/', seedCourses);       // Fixes the 404 error from Admin panel
router.post('/seed', seedCourses);   // Retains compatibility with legacy seed calls

module.exports = router;