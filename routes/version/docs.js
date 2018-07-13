/**
 * For user information
 */

const express = require( 'express' );
const jsfs = require('jsonfile')
const path = require('path')
const router = new express.Router();

router.get('/',function(req,res){
    var api = jsfs.readFileSync(path.join(__dirname,'api.json'));
    res.render("doc.ejs",{
        title: "Example Joeman Restful API server - v1.0.0",
        api: api
    });
})

module.exports = router;
