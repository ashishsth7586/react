import React,{Component} from 'react';
import Todos from './Todos.js'
import AddTodo from './AddTodo'
class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Study Ielts and Write essays'},
      {id: 2, content: 'go to office at 2pm'}
    ]
  }
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos: newTodos
    })
  }
  addTodo = (todo) => {
    todo.id = Math.random()
    let addedTodos = [...this.state.todos, todo]
    this.setState({
      todos: addedTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo} />
      </div>
    )
  }
}

export default App;
