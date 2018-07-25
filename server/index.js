const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const Twitter = require('twitter');
const env = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
env.config();

const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", serveStatic ( path.join (__dirname, '/../public') ) )

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.get('/search', (req, res) => {
  client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
    console.log(tweets);
    return res.json({});
  });
});

app.listen(
  process.env.PORT || 3000, 
  ()=>{
    console.log('Server running on port 3000!');
  }
);