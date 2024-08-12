const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  res.send(req.body);
});

/**
 * POST route template
 */
// router.post('/add-new', (req, res) => {
//   const { title, movie, seasonNum, numOfEps, platform, status } = req.body;
//     // const getStatusIdQuery = `SELECT id FROM status WHERE type = $1`;
//   const queryText = `INSERT INTO "media" ( title, movie, season_number, number_of_episodes, platform, status_id)
//     VALUES ($1, $2, $3, $4, $5, $6) `;
    
//   pool
//     .query( queryText, [title, movie, seasonNum, numOfEps, platform, status])
//     .then(() => res.sendStatus(201))
//     .catch((err) => {
//       console.log('Add New Media failed: ', err);
//       res.sendStatus(500);
//     });
// });


router.post('/add-new', async (req, res) => {
  const { title, movie, seasonNum, numOfEps, platform, status } = req.body;

  // Validate user input (optional but recommended)
  // if (!title || !status) {
  //   return res.status(400).send({ message: 'Missing required fields' });
  // }

  try {
    // Efficiently retrieve status_id using prepared statement
    const getStatusIdQuery = `SELECT id FROM status WHERE type = $1`;
    const { rows: [statusRow] } = await pool.query(getStatusIdQuery); // Lowercase for case-insensitive matching

    if (!statusRow) {
      return res.status(400).send({ message: 'Invalid status type provided' });
    }

    const statusId = statusRow.id;

    // Secure insertion using prepared statement
    const insertQuery = `INSERT INTO "media" (title, movie, season_number, number_of_episodes, platform, status_id) VALUES ($1, $2, $3, $4, $5, $6)`;
    await pool.query(insertQuery, [title, movie, seasonNum, numOfEps, platform, statusId]);

    res.sendStatus(201); // Created
  } catch (err) {
    console.error('Add New Media failed:', err);
    res.sendStatus(500); // Internal Server Error
  }
});

module.exports = router;

