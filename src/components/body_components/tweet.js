import React from 'react';

class Tweet extends React.Component {
  render() {
    const { tweet } = this.props;
    return (
      <div className="App-tweet-container">
        <div className="App-tweet-name">{tweet.name}</div>
        <div className="App-tweet-time">
          Time: {tweet.created_at.substring(0, 19)}
        </div>
        <div className="App-tweet-meta">
          <i className="fa fa-retweet" /> {tweet.retweets + ' '}
          <i className="fa fa-star" /> {tweet.favorites}
        </div>
        {tweet.text}
      </div>
    );
  }
}

export default Tweet;
