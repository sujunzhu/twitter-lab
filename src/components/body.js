import React from 'react';
import axios from 'axios';
import Search from './body_components/search';
import SortMetric from './body_components/sort_metric';
import DataDisplay from './body_components/data_display';
import Nav from './nav';

// preprocess data to search online
function processQs(prev) {
  prev = prev.replace(/\s/g, '');
  var res = prev.split(',');
  var str = '';
  for (let i = 0; i < res.length - 1; i++) {
    str += res[i] + '+OR+';
  }
  str += res[res.length - 1];
  return str;
}

// our server url, should be in constant folder but for convience to put here.
const url = 'http://ec2-35-167-189-54.us-west-2.compute.amazonaws.com';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      pageNum: 10,
      q: '#USC, #FightOn',
      time: new Date(),
      spent: 0
    };
  }

  // handle main search fetch action
  handleSearchClicked = () => {
    this.setState({ time: new Date() });
    var parsedResult = processQs(this.state.q);
    console.log('Search: ', parsedResult);
    axios
      .get(`${url}:4000/search/`, {
        method: 'GET',
        params: {
          q: parsedResult,
          num: this.state.pageNum
        }
      })
      .then(response => {
        this.setState(
          {
            data: response.data,
            spent: (new Date() - this.state.time) / 1000
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(errors => {
        console.log(errors);
      });
  };

  // update to searching by favourites
  sortByFavourite = () => {
    this.state.data.sort(function(a, b) {
      return b.favorites - a.favorites;
    });
    this.forceUpdate();
  };

  // update to searching by retweet
  sortByRetweet = () => {
    this.state.data.sort(function(a, b) {
      return b.retweets - a.retweets;
    });
    this.forceUpdate();
  };

  // update page number
  updatePage = num => {
    this.setState({ pageNum: num }, () => {
      this.handleSearchClicked();
    });
  };

  // update search Q whenever user changed
  handleInputOnchange = value => {
    this.setState({ q: value }, () => {
      console.log('changed to: ', value);
    });
  };

  render() {
    return (
      <div className="App-data-body">
        <Search
          handleInputOnchange={this.handleInputOnchange}
          handleSearchClicked={this.handleSearchClicked}
        />
        <SortMetric
          sortByFavourite={this.sortByFavourite}
          sortByRetweet={this.sortByRetweet}
        />
        <DataDisplay data={this.state.data} spent={this.state.spent} />
        <Nav updatePage={this.updatePage} />
      </div>
    );
  }
}

export default Body;
