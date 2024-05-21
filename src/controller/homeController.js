const router = require('express').Router();
const recipesServices = require('../services/recipesServices');

router.get('/', (req, res) => {
    res.render('home');
});

module.exports = router;