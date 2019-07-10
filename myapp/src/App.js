import React,{ Component } from 'react';
import NestedComponent from './ninjas';
import AddProperty from './AddProperty';

class App extends Component {  
  state = {
    properties: [
      { name: 'ashish', age:25, color: 'black', id: 1 },
      { name: 'Ram', age:55, color: 'red', id: 2 },
      { name: 'Shyam', age:21, color: 'green', id: 3 }
    ]
  }
  addProperty = (property) => {
    //console.log(property);
    property.id = Math.random();
    // using concatenation of arrays
    let propertiess = this.state.properties.concat(property)
    // using spread operator ...
    //let propertiess = [...this.state.properties, property]; // creates the carbon copy of the state above
    //console.log(propertiess);
    this.setState({
      properties: propertiess
    })
  }
  deleteProperty = (id) => {
    //foll
    let propertiesss = this.state.properties.filter(property => {
      return property.id !== id
    });
    this.setState({
      properties: propertiesss
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My First React App!</h1>
        <p>Welcome!!</p>
        <NestedComponent properties={this.state.properties} deleteProperty={this.deleteProperty}/>
        <AddProperty addProperty = {this.addProperty} />
        
      </div>
    )    
  }
}
export default App;
