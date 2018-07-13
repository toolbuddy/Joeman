const express = require( 'express' );
const router = new express.Router();

/**
 * v1
 */
const v1 = require('./version/v1');

router.use('/v1', v1)

module.exports = router;
