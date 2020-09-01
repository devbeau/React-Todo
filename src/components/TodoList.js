// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component{




    render() {
        const todos = this.props.todos;
        {console.log(todos, "TEST")}
        return (
           todos.map(todo => (
            <>
              <Todo key={todo.id} {...todo} onClick={this.props.onClick}/>
            </>
            ))
        )
    }
}