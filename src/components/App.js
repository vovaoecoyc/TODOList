import React, { Component } from 'react';
import '../App.css';
import TaskList from './TaskList';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
      return (
        <header className="App-header">
            <h3>Список задач</h3>
            <TaskList dataTasks={this.props.dataTasks} />
        </header>
      );
  }
}

export default App;
