import React, { Component } from 'react';
import './static/App.css';
import Header from './components/header';
import Body from './components/body';
import Nav from './components/nav';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Nav />
        <Footer />
      </div>
    );
  }
}

export default App;
