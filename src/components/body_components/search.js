import React from 'react';
import PropTypes from 'prop-types';

class Search extends React.Component {
  render() {
    return (
      <div className="App-search">
        {/* SearchInput */}
        <div className="App-search-input">
          <input
            className="App-input"
            placeholder="Example Tags: #USC, #FightOn"
            ref={TagInput => {
              this.TagInput = TagInput;
            }}
            onChange={() => {
              this.props.handleInputOnchange(this.TagInput.value);
            }}
          />
        </div>

        {/* SearchButton */}
        <div className="App-search-button">
          <button
            className="App-button"
            onClick={this.props.handleSearchClicked}
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  handleSearchClicked: PropTypes.func.isRequired,
  handleInputOnchange: PropTypes.func.isRequired
};

export default Search;
