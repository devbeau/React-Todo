import React from 'react';

export default class TodoForm extends React.Component {


    render () {
        return (
            <form onSubmit={this.props.onSubmit}>
                <input 
                    type='text'
                    name='todoInput'
                    value={this.props.todoInput}
                    onChange={this.props.onChange}
                    placeholder='Enter task...'
                />
                <button>Add task</button>
                <button onClick={this.props.onClick}>Clear Completed Tasks.</button>
            </form>
        )
    }
}