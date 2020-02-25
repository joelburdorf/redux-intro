import React, { Component } from 'react';
import { connect } from 'react-redux';

 
class App extends Component{

    handleClick = () => {
      this.props.dispatch (
        {
          type: 'BUTTON_ONE'
          }
      )
    }
    render(){

    return (
      <div className="App">
        <h1>App JS</h1>
        <button onClick={this.handleClick}>Button One</button>
      </div>
    );
  }
}


export default connect()(App);
