import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {

  render() {
    return (
      <div className='App-search'>
        <div className='App-search-input'>
          <input className='App-input' placeholder='Tags: #eg1, #eg2'/>
        </div>

        <div className='App-search-button'>
          <button className='App-button' onClick={this.props.handleSearchClicked}>Search</button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearchClicked: PropTypes.func.isRequired,
};

export default Search;