const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/completed-shows', (req, res) => {
  // GET route code here
  const queryText = `
  SELECT media.id, media.title, media.platform 
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = false AND status.type = 'completed' 
  ORDER BY media.title ASC;
  `;
pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get completed-shows', err);
    res.sendStatus(500)
  })
});

router.get('/currently-watching-shows', (req, res) => {
  const queryText = `
  SELECT media.id, media.title, media.platform 
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = false AND status.type = 'currently_watching';
  `;
pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get currently-watching-shows', err);
    res.sendStatus(500)
  })
  });

router.get('/to-watch-shows', (req, res) => {
  const queryText = `
  SELECT media.id, media.title, media.platform 
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = false AND status.type = 'to_watch'
  ORDER BY media.title ASC;
  `;
pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get to-watch-shows', err);
    res.sendStatus(500)
  })
  });

router.get('/dnf-shows', (req, res) => {
  const queryText = `
  SELECT media.id, media.title, media.platform 
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = false AND status.type = 'did_not_finish'
  ORDER BY media.title ASC;
  `;
pool.query(queryText)
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: GET dnf-movies', err);
    res.sendStatus(500)
  })
  });

module.exports = router;