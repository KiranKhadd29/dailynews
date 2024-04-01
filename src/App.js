import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  name = 'Kiran';
  render() {
    return (
      <div>
        Hi, It's Daily News presented by {this.name}
      </div>
    )
  }
}
