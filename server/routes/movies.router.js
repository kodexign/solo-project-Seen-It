const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/completed-movies', (req, res) => {
  // GET route code here
});

router.get('/current-watching-movies', (req, res) => {
    // GET route code here
  });

router.get('/to-watch-movies', (req, res) => {
    // GET route code here
  });

router.get('/dnf-movies', (req, res) => {
    // GET route code here
  });



module.exports = router;
