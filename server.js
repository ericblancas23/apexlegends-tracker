const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = express();

const port = process.env.PORT || 8000;

// app.get('/api/v1/profile/:platform/:gamertag', (req, res) => {
//     console.log(req.params.platform, req.params.gamertag);
//     res.send('hello');
// });

//dev logging
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//profile routes
app.use('/api/v1/profile', require('./routes/profile'));

app.listen(port, () => {
    console.log(`server is working: running in ${process.env.NODE_ENV} on ${port}`);
});



