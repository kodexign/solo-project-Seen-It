const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.put('/update-status/:mediaId', (req, res) => {
    const mediaId = req.params.mediaId;
    const updateStatusId = req.body.updateStatusId;

      const queryText = `
      UPDATE media
      SET status_id = $1
      WHERE id = $2  
      `;

  pool.query(queryText,[updateStatusId, mediaId])
    .then(result => {
      res.send(result.rows);
    })
    .catch(err => {
      console.log(`ERROR: Could not update mediaId: ${mediaId} to statusId: ${updateStatusId}.  Error:`, err);
      res.sendStatus(500)
    })
    
});

// //Update status to complete
// router.put('/update-status-to-completed/:id', (req, res) => {
//     const { id } = req.params;
//       const queryText = `
//       UPDATE media
//       SET status_id = 1
//       WHERE id = $1  
//       `;

//   pool.query(queryText,[id])
//     .then(result => {
//       res.send(result.rows);
//     })
//     .catch(err => {
//       console.log('ERROR: Could not update media to complete', err);
//       res.sendStatus(500)
//     })
    
// });

// //Update status to Currently Watching
// router.put('/update-status-to-currently_watching/:id', (req, res) => {
//   const { id } = req.params;
//     const queryText = `
//     UPDATE media
//     SET status_id = 2
//     WHERE id = $1  
//     `;

// pool.query(queryText,[id])
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: Could not update media to currently watching', err);
//     res.sendStatus(500)
//   })
  
// });

// //Update status to To Watch
// router.put('/update-status-to-watch/:id', (req, res) => {
//   const { id } = req.params;
//   console.log('id:', id);
//   console.log('type of', typeof id);
//     const queryText = `
//     UPDATE media
//     SET status_id = 3
//     WHERE id = $1  
//     `;

// pool.query(queryText,[id])
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: Could not update media to to watch', err);
//     res.sendStatus(500)
//   })
  
// });

// //Update status to did not finish
// router.put('/update-status-to-dnf/:id', (req, res) => {
//   const { id } = req.params;
//     const queryText = `
//     UPDATE media
//     SET status_id = 4
//     WHERE id = $1  
//     `;

// pool.query(queryText,[id])
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: Could not update media to to watch', err);
//     res.sendStatus(500)
//   })
  
// });

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