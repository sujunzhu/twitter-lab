import React from 'react';
import PropTypes from 'prop-types';

class Nav extends React.Component {
  render() {
    return(
      <div className="App-nav" style={{ display: 'flex'}}>
        <div style={{ 
          flex: 2, 
          textAlign: 'center', 
          display: 'flex', 
          justifyContent:'center',
          alignItems: 'center',
        }}>
          <input 
            className="App-input" 
            placeholder={10} 
            style={{ width: '50px' }} 
            type="number"
            ref={PageInput => {this.PageInput = PageInput}}
          />
          <button className='App-button'
            onClick={()=>{
              if(!this.PageInput.value || this.PageInput <= 0) { return; }
              else this.props.updatePage(this.PageInput.value)}
            }> P Page</button>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  updatePage: PropTypes.func.isRequired,
}

export default Nav;