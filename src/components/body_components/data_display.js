import React from 'react';
import PropTypes from 'prop-types';
import Tweet from './tweet';

class DataDisplay extends React.Component {
  render() {
    // Tweets
    const tweets = this.props.data.map(tweet => (
      <Tweet key={tweet.id} tweet={tweet} />
    ));
    return (
      <div className="App-data-display">
        <div className="App-data-display-header">Tweets:</div>

        {/* Display tweets if available otherwise display please search */}
        {tweets && tweets.length > 0 ? (
          tweets
        ) : (
          <div className="App-no-result">Oops, search something~ :D</div>
        )}

        {/* Display time elaspsed */}
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

DataDisplay.propTypes = {
  spent: PropTypes.number.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired
    })
  )
};

export default DataDisplay;
