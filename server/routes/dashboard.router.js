const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//GET three recently added titles
router.get('/recently-added', (req, res) => {
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

//GET three currently watching titles
router.get('/three-current', (req, res) => {
  // GET route code here
  const queryText = `
  SELECT title
  FROM media
  WHERE status_id = 2
  ORDER BY id DESC
  LIMIT 3
  ;

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