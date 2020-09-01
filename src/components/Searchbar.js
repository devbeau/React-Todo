import React from 'react';

export default class Searchbar extends React.Component {

    render(){
        return (
            <>
                <label htmlFor='search'>
                    <input
                        type='text'
                        name='search'
                        value={this.props.search}
                        onChange={this.props.onChange}
                        placeholder='Search tasks...'
                    />
                </label>
                <button onClick={this.props.searchHandler}>Submit Search</button>
            </>
        )
    }
}