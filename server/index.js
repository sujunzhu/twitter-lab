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

app.use("/", serveStatic ( path.join (__dirname, '/../public') ) )

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/../public/index.html'));
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/search', (req, res) => {
  var params = {
    q: req.query.q,
    count: req.query.num,
  };
  if(!params.q || !params.count){
    params.q = '';
    params.count = 10;
  }
  console.log(params);
  client.get('search/tweets', params, function(error, tweets, response) {
    let values = tweets['statuses'].map( tweet => {
      return  {
          id:tweet.id,
          created_at : tweet.created_at,
          text : tweet.text,
          retweets : tweet.retweet_count,
          favorites : tweet.favorite_count,
          name: tweet.user.name,
          handle: tweet.user.screen_name
      }
    });
    console.log(values);
    return res.json(values);
  });
});

app.listen(
  process.env.PORT || 4000, 
  ()=>{
    console.log('Server running on port 4000!');
  }
);