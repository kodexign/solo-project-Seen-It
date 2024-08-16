const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

//Update movie status to complete
router.put('/update-status-to-completed/:id', (req, res) => {
    const { id } = req.params;
      const queryText = `
      UPDATE media
      SET status_id = 1
      WHERE id = $1  
      `;

  pool.query(queryText,[id])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log('ERROR: Could not update media to complete', err);
      res.sendStatus(500)
    })
    
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;
  const sqlText = `DELETE FROM "media" WHERE "id" = $1;`;
  pool.query(sqlText, [id])
      .then((result) => {
          console.log(`DELETED Media from database success`, result);
          res.sendStatus(201);
      })
      .catch((error) => {
          console.log(`Error deleting media`, error);
          res.sendStatus(500); 
      })
})
module.exports = router;