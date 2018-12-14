import React, { Component } from 'react';
import Options from './components/Options'
import SAppBar from './components/SAppBar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <SAppBar />
        <Options />
      </div>
    );
  }
}

export default App;
