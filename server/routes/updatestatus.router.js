const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Update movie status to complete
router.put('/update-status-to-completed/:id', (req, res) => {
    const { id } = req.params;
    const completedStatusId = 1; // id for completed status_type

      const queryText = `
      UPDATE media
      SET status_id = $1
      WHERE id = $2  
      `;
      const values = [completedStatusId, id];
  pool.query(queryText, values)
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Could not update media to complete', err);
      res.sendStatus(500)
    })
    
});
module.exports = router;