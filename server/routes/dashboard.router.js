const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/recently-added', (req, res) => {
  // GET route code here
  const queryText = `
  SELECT title
  FROM media
  ORDER BY id DESC
  LIMIT 3;

  `;
pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get recently added', err);
    res.sendStatus(500)
  })
});


module.exports = router;