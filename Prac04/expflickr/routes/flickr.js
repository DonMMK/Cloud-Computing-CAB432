const express = require('express');
const https = require('https');
const router = express.Router();

router.get('/:query/:number', (req, res) => {
    const options = createFlickrOptions(req.params.query, req.params.number);
    const flickReq = https.request(options, (flickRes) => {
        //This is the body of the callback for dealing with the results
        //from the Flickr API. We will assemble the response as it comes in,
        //parse it like we did last week and create the page.
    });
    flickReq.on('error', (e) => {
        console.error(e);
    });
    flickReq.end();
});

module.exports = router;