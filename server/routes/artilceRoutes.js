const express = require('express');
const router = express.Router();
const { 
  createArticle, 
  getAllArticles, 
  updateArticle, 
  deleteArticle,
  getArticleById,
  updateViews,
  trackReadTime,
  getArticleStats
} = require('../controllers/articleController.js');

// 1. Global Stats (Dashboard) - Put this BEFORE /:id to avoid conflicts
router.get('/stats/summary', getArticleStats);

// 2. Base Routes: /api/articles
router.route('/')
  .get(getAllArticles) 
  .post(createArticle);

// 3. ID Based Routes: /api/articles/:id
router.route('/:id')
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

// 4. Engagement Tracking Routes
router.patch('/:id/view', updateViews);
router.post('/:id/track-time', trackReadTime);

module.exports = router;