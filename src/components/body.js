import React from 'react';
import Search from './body_components/search';
import SortMetric from './body_components/sort_metric';
import DataDisplay from './body_components/data_display';
import axios from 'axios';

class Body extends React.Component {
  constructor() {
    super();
    this.state = {
      data:[],
    }
  }

  handleSearchClicked = () => {
    axios.get(`http://localhost:4000/search/`, {
      method: 'GET',
    })
    .then(response => {
      this.setState({data: response.data}, ()=>{
        console.log(this.state);
      });
    })
    .catch((errors)=>{
      console.log(errors);
    });
  }

  sortByFavourite = () => {
    this.state.data.sort(function(a, b) {return b.favorites - a.favorites});
    this.forceUpdate();
  }

  sortByRetweet = () => {
    this.state.data.sort(function(a, b) {return b.retweets - a.retweets});
    this.forceUpdate();
  }

  render() {
    return (
      <div className="App-data-body">
        <Search handleSearchClicked={this.handleSearchClicked}/>
        <SortMetric 
          sortByFavourite={this.sortByFavourite}
          sortByRetweet={this.sortByRetweet}
        />
        <DataDisplay 
          data={this.state.data}
        />
      </div>
    );
  }
}

export default Body;