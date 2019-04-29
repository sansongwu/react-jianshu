import React, { Component } from 'react';

class TodoTest extends Component {
    render() {
        console.log('test render')
        return (
           <div>{this.props.testNumber}</div> 
        )
    }
}

export default TodoTest;
