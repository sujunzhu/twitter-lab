import React from 'react';
import PropTypes from 'prop-types';

// Display for each tweet
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

Tweet.propTypes = {
  name: PropTypes.string,
  created_at: PropTypes.string,
  retweets: PropTypes.number,
  favorites: PropTypes.number,
  text: PropTypes.string
};

Tweet.defaultProps = {
  name: '',
  created_at: '',
  retweets: 0,
  favorites: 0,
  text: ''
};

export default Tweet;
