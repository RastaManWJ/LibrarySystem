import React, { Component } from 'react';
import Options from './components/Options'

class App extends Component {
  render() {
    const title = "Library System";
    //const options = ["browse", "add", "delete", "modify"];
    return (
      <div className="App">
        <h1>{title}</h1>
        <Options />
      </div>
    );
  }
}

export default App;
