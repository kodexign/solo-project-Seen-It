const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/shows/:currentStatusId', (req, res) => {
  const currentStatusId = req.params.currentStatusId;

  const queryText = `
  SELECT media.id, media.title, media.platform, media.season_number, media.number_of_episodes  
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = false AND status.id = $1
  ORDER BY media.title ASC;
  `;
pool.query(queryText, [currentStatusId])
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get shows', err);
    res.sendStatus(500)
  })
});


module.exports = router;