import React from 'react';
import Tweet from './tweet';

class DataDisplay extends React.Component {
  render() {
    const tweets = this.props.data.map(tweet => (
      <Tweet key={tweet.id} tweet={tweet} />
    ));
    return (
      <div className="App-data-display">
        <div className="App-data-display-header">Tweets:</div>
        {tweets && tweets.length > 0 ? (
          tweets
        ) : (
          <div className="App-no-result">Oops, search something~ :D</div>
        )}
        {this.props.spent > 0 && (
          <div
            style={{
              margin: 'auto',
              textAlign: 'center',
              marginBottom: '20px'
            }}
          >
            Time elapsed: {this.props.spent}s
          </div>
        )}
      </div>
    );
  }
}

export default DataDisplay;
