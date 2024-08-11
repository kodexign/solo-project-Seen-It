const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/completed-shows', (req, res) => {
  // GET route code here
});

router.get('/current-watching-shows', (req, res) => {
    // GET route code here
  });

router.get('/to-watch-shows', (req, res) => {
    // GET route code here
  });

router.get('/dnf-shows', (req, res) => {
    // GET route code here
  });



module.exports = router;