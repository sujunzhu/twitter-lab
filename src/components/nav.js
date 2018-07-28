import React from 'react';

class Nav extends React.Component {
  render() {
    return(
      <div style={{ display: 'flex'}}>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <button className='App-button'> Prev </button>
        </div>
        <div style={{ 
          flex: 2, 
          textAlign: 'center', 
          display: 'flex', 
          justifyContent:'center',
          alignItems: 'center',
        }}>
          <input className="App-input" placeholder={10} style={{ width: '40px' }}/>
          <button className='App-button'> P Page</button>
        </div>
        <div style={{ flex: 1, textAlign: 'center' }}>
          <button className='App-button'> Next </button>
        </div>
      </div>
    )
  }
}

export default Nav;