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
router.post('/add-new', (req, res) => {
  const { title, movie, seasonNum, numOfEps, platform, status } = req.body;
  const queryText = `INSERT INTO "media" ( title, movie, season_number, number_of_episodes, platform, status_id)
    VALUES ($1, $2, $3, $4, $5, $6) `;
    
  pool.query( queryText, [title, movie, seasonNum, numOfEps, platform, status])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Adding New Media failed: ', err);
      res.sendStatus(500);
    });
});


module.exports = router;

