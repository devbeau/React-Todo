import React from 'react'

export default class Todo extends React.Component {


    render(){
        return (
                <p
                id={this.props.id}
                style={{textDecoration: this.props.completed && 'line-through'}}
                onClick={this.props.onClick}
                >
                    {this.props.task}
                </p>
        )            
    }
}