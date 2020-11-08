import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddForm';

class App extends Component {
  state = {
    todos : [
    ]
  }

  deleteTodo = (id) => {
    const todoList = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos : todoList
    });
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="note">React Todo App</h1>
          <Todos todos = {this.state.todos} deleteTodo = {this.deleteTodo}/>
          <br/>
          <AddTodo addTodo = {this.addTodo}/>
        </header> 
      </div>
    );
  }
}

export default App;
