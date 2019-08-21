const express = require('express');
const morgang = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

const port = process.env.PORT || 8000;

app.get('/api/v1/:platform/:gamertag', (req, res) => {
    res.send('hello');
})


app.listen(port, () => {
    console.log(`server is working: running in ${process.env.NODE_ENV} on ${port}`);
});



