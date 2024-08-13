const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Update movie status to complete
router.put('/:id/update-status-to-completed', (req, res) => {
    const { id } = req.params;
    const completedStatusId = 1; // Replace with the actual ID of the 'completed' status

      const queryText = `
        UPDATE media
        SET status_id = (SELECT id FROM status WHERE "type" = 'completed')
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