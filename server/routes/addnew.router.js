const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  res.send(req.body);
});

/**
 * POST route template
 */
router.post('/media', (req, res) => {
  const { title, movie, seasonNum, numOfEps, platform, status } = req.body;
  const getStatusIdQuery = `SELECT id FROM status WHERE type = $1`;
  const queryText = `INSERT INTO "media" ( title, movie, season_number, number_of_episodes, platform, status_id)
    VALUES ($1, $2, $3, $4, $5, $6) `;
    
  pool
    .query(getStatusIdQuery, queryText, [title, movie, seasonNum, numOfEps, platform, status])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add New Media failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
