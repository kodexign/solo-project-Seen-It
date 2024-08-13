const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Update movie status to complete
router.put('/:id/update-status-to-completed', (req, res) => {
    const queryText = `
    UPDATE media
    SET status_id = (SELECT id FROM status WHERE status_type = 'completed')
    WHERE id = :id
    `;
  pool.query(queryText)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Could not update media to complete', err);
      res.sendStatus(500)
    })
    
});
module.exports = router;