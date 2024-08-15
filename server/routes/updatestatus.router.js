const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Update movie status to complete
router.put('/update-status-to-completed/:id', (req, res) => {
    const { id } = req.params.id;
      const queryText = `
      UPDATE media
      SET status_id = $1
      WHERE id = $2  
      `;

      const completedStatusId = 1; // id for completed status_type

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

router.delete('/:id', (req, res) => {
  let { id } = req.params;
  const sqlText = `DELETE FROM "media" WHERE "id" = $1;`;
  pool.query(sqlText, [id])
      .then((result) => {
          console.log(`Got stuff back from the database`, result);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error making database query ${sqlText}`, error);
          res.sendStatus(500); // Good server always responds
      })
})
module.exports = router;