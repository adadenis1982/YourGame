const router = require('express').Router();
const { Result } = require('../db/models');

router.get('/', async (req, res) => {
  try {
    const points = await Result.findAll({ where: {userId:  req.session.user.id }, raw: true });
    return res.status(200).json(points);
  } catch (error) {
    console.log(error.message);
    return res.status(500).end();
  }
});

module.exports = router;
