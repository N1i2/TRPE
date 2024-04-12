import React from 'react';
import './App.css';
import Counter from './Counter';

class App extends React.Component {
  render(): JSX.Element {
    return (
      <div className="App">
        <Counter/>
      </div>
    );
  }
}

export default App;