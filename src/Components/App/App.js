import React, { Component } from 'react';
import { connect } from 'react-redux';

 
class App extends Component{

    handleClick1 = () => {
      this.props.dispatch ({
          type: 'BUTTON_ONE'
          }
      )
    }

    handleClick2 = () => {
      this.props.dispatch({
        type: 'BUTTON_TWO'
      }
      )
    }
    render(){

    return (
      <div className="App">
        <h1>App JS</h1>
        <button onClick={this.handleClick1}>Button One</button>
        <button onClick={this.handleClick2}>Button Two</button>
      </div>
    );
  }
}


export default connect()(App);
