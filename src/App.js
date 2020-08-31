import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Searchbar from './components/Searchbar';

const INITIAL_INPUT_VALUE = '';
const INITIAL_SEARCH_VALUE = '';

const NEW_TODO = {
  task: '',
  id: '',
  completed: false,
}



class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: JSON.parse(window.localStorage.getItem('todos')) || [],
      todoInput: INITIAL_INPUT_VALUE,
      search: INITIAL_SEARCH_VALUE,
    };
  }

  addNewTodo = inputValue => {
    const newItem = [{...NEW_TODO, task: inputValue, id: Date.now()}];
    return this.state.todos.concat(newItem);
  }

  toggleCompleted = (todoArray, targetID) => {
    return todoArray.map((item) => {
      return item.id === Number(targetID) ? {...item, completed: !item.completed} : item
    })
  };

  clearCompleted = (event) => {
    event.preventDefault();
    return this.setState({...this.state, todos: this.state.todos.filter(item => !item.completed)})
  }

  inputChangeHandler = event => {
    const {name, value} = event.target;
    this.setState({...this.state, [name]: value})
  };

  submitHandler = event => {
    event.preventDefault();
    console.log(this.addNewTodo(this.state.todoInput));
    console.log(this.addNewTodo(this.state.todoInput));
    this.setState({todos: this.addNewTodo(this.state.todoInput)})
    this.setState({todoInput: INITIAL_INPUT_VALUE})
  };

  clickHandler = event => {
    const {id} = event.target;
    console.log(event, id);
    this.setState({todos: this.toggleCompleted(this.state.todos, id)});
  };

  searchHandler = event => {
    const value = this.state.search;
    event.preventDefault();
    this.setState({...this.state, todos: this.state.todos.filter(item => item.task.includes(value))})
  }
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <Searchbar 
          onChange={this.inputChangeHandler}
          searchHandler={this.searchHandler} 
          searchValue={this.state.search} />
        <TodoList todos={this.state.todos} onClick={this.clickHandler}/>
        <TodoForm 
          todoInput={this.state.todoInput}
          onSubmit={this.submitHandler}
          onChange={this.inputChangeHandler}
          onClick={this.clearCompleted}
          />
        {window.localStorage.setItem('todos', JSON.stringify(this.state.todos))}
      </div>
    );
  }
}

export default App;
