/**
 * In the following React template, modify the component so that the counter correctly displays and it increments by one whenever the button is pressed. 
 * You are free to add classes and styles, but make sure you leave the element ID's as they are.
 */

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

interface IProps {}

interface IState {
  counter: number;
}

class Counter extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
  }

  increment () {
    this.setState((prevState) => ({counter: prevState.counter + 1}));
  }

  render() {
    return (
      <div id="mainArea">
        <p>button count: <span>{this.state.counter}</span></p>
        <button id="mainButton" onClick={this.increment}>Increase</button>
      </div>
    );
  }
}

ReactDOM.render(
  <Counter />,
  document.getElementById('test-02')
);