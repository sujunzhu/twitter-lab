import React from 'react';
import PropTypes from 'prop-types';

class SortMetric extends React.Component {
  render() {
    return (
      <div className="App-sort-metric">
        <input
          type="radio"
          name="sortBy"
          value="fav"
          onClick={() => {
            this.props.sortByFavourite();
          }}
        />
        <label>By Favourites</label>

        <input
          type="radio"
          name="sortBy"
          value="ret"
          onClick={() => {
            this.props.sortByRetweet();
          }}
        />
        <label>By Retweets</label>
      </div>
    );
  }
}

SortMetric.propTypes = {
  sortByFavourite: PropTypes.func.isRequired,
  sortByRetweet: PropTypes.func.isRequired
};

export default SortMetric;
