const express = require( 'express' );
const router = new express.Router();
// front-end only
const docs = require( './docs' );

// docs page
router.use( '/docs', docs );

router.use( '/', (req,res)=>{
	res.end("[api-v1] Health check: OK");
})

module.exports = router;
