import React,{ Component } from 'react';
import NestedComponent from './ninjas';

class App extends Component {  
  state = {
    properties: [
      { name: 'ashish', age:25, color: 'black', id: 1 },
      { name: 'Ram', age:55, color: 'red', id: 2 },
      { name: 'Shyam', age:21, color: 'green', id: 3 }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome!!</p>
        <NestedComponent properties={this.state.properties}/>
      </div>
    )    
  }
}

export default App;
