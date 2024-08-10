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
router.post('/', (req, res) => {
  const title= req.body.title;
  const movie = req.body.movie;
  const seasonNum = req.body.seasonNum;
  const numOfEps = req.body.numOfEps;
  const platform = req.body.platform;
  const status = req.body.status;

  const queryText = `INSERT INTO "media" ( title, movie, season_number, number_of_episodes, platform, status_id)
    VALUES ($1, $2, $3, $4, $5, $6) `;
  pool
    .query(queryText, [title, movie, seasonNum, numOfEps, platform, status])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Add New Media failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;
