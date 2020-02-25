import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component{
    state = {
      input: ''
    }

    handleClick1 = () => {
      this.props.dispatch ({
          type: 'BUTTON_ONE',
          }
      )
    }

    handleClick2 = () => {
      this.props.dispatch({
        type: 'BUTTON_TWO'
        }
      )
    }

    addElement = () => {
      this.props.dispatch({
        type: 'ADD_ELEMENT',
        payload: this.state.input
      });
      // clears input
      this.setState({
        input: ''
      })
      console.log('test', this.state.input);
    }

    handleInput = (event) => {
      console.log('value', event.target.value);
      this.setState ({
        input: event.target.value
      });
    }

    render(){

    return (
      <div className="App">
        <h1>App JS</h1>
        <h2>{JSON.stringify(this.props.reduxState)}</h2>
        <button onClick={this.handleClick1}>Button One</button>
        <button onClick={this.handleClick2}>Button Two</button>
        <input value={this.state.input} onChange={this.handleInput}></input>
        <button onClick={this.addElement}>Add Element</button>
       
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState,
  first: reduxState.firstReducer
})

export default connect(putReduxStateOnProps)(App);
