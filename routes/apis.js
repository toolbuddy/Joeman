const express = require( 'express' );
const router = new express.Router();
const version = require('./version');

router.use('/api',version);

module.exports = router;
