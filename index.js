const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const db = require('./queries');

app.use(bodyParser.json());

app.use(express.static("public")); //serves akk statuc files contained in the public folder

app.get('/rsslinks',db.getAllRSS);
app.get('/rsslinks/:index',db.getSingleRSS);
app.post('/rsslinks',db.addNewRSS);
app.put('/rsslinks',db.updateRssInfo);
app.delete('/rsslinks',db.deleteRSS);


app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});