const router = require('express').Router();

const { Result } = require('../db/models');

router.get('/', async (req, res) => {
  let results;
  try {
    results = await Result.findAll();
  }
  catch (error) {
    res.status(401).json({ error: error.message });
    return;
  }
  console.log(results)
  res.json({ results });
})
