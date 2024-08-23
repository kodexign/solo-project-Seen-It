const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/movies/:currentStatusId', (req, res) => {
  const currentStatusId = req.params.currentStatusId;

  const queryText = `
  SELECT media.id, media.title, media.platform 
  FROM media
  JOIN status ON media.status_id = status.id
  WHERE media.movie = true AND status.type = 'completed' 
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

// // GET movies with Status of Completed
// router.get('/completed-movies', (req, res) => {
//   const queryText = `
//   SELECT media.id, media.title, media.platform 
//   FROM media
//   JOIN status ON media.status_id = status.id
//   WHERE media.movie = true AND status.type = 'completed' 
//   ORDER BY media.title ASC;
//   `;
// pool.query(queryText)
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: Get completed-movies', err);
//     res.sendStatus(500)
//   })
// });

// // GET movies with status of currently watching
// router.get('/currently-watching-movies', (req, res) => {
//   const queryText = `
//   SELECT media.id, media.title, media.platform 
//   FROM media
//   JOIN status ON media.status_id = status.id
//   WHERE media.movie = true and status.type = 'currently_watching';
//   `;
// pool.query(queryText)
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: Get currently-watching-movies', err);
//     res.sendStatus(500)
//   })
//   });

//   //GET movies with status of to watch
// router.get('/to-watch-movies', (req, res) => {
//   const queryText = `
//   SELECT media.id, media.title, media.platform 
//   FROM media
//   JOIN status ON media.status_id = status.id
//   WHERE media.movie = true and  status.type = 'to_watch'
//   ORDER BY media.title ASC;
//   `;
// pool.query(queryText)
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: Get to-watch-movies', err);
//     res.sendStatus(500)
//   })
//   });

// //GET movies with status of did not finish
// router.get('/dnf-movies', (req, res) => {
//   const queryText = `
//   SELECT media.id, media.title, media.platform 
//   FROM media
//   JOIN status ON media.status_id = status.id
//   WHERE media.movie = true and  status.type = 'did_not_finish'
//   ORDER BY media.title ASC;
//   `;
// pool.query(queryText)
//   .then(result => {
//     res.send(result.rows);
//   })
//   .catch(err => {
//     console.log('ERROR: GET dnf-movies', err);
//     res.sendStatus(500)
//   })
//   });

  
  

module.exports = router;
