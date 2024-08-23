const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/movies/:currentStatusId', (req, res) => {
  const currentStatusId = req.params.currentStatusId;

  const queryText = `
  SELECT media.id, media.title, media.platform 
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = true AND status.id = $1
  ORDER BY media.title ASC;
  `;
pool.query(queryText, [currentStatusId])
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('ERROR: Get movies', err);
    res.sendStatus(500)
  })
});


  
  

module.exports = router;
