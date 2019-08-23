const express = require('express');
const router = express.Router(); 
const fetch = require('node-fetch');

router.get('/:platform/:gamertag', async (req, res) => {
    try {
    const headers = {
        'TRN-Api-Key': process.env.TRACKER_API_KEY
    }
    const { platform, gamertag } = req.params;
    const response  = await fetch(`${process.env.TRACKER_API_KEY}/profile/
    ${platform}/${gamertag}`, {
        headers: headers
    }); 
    const data = await response.json();
    res.json(data);
    } catch(err) {
        console.error(err);
        res.status(500).json({message: 'server error'});
    }
});


module.exports = router;