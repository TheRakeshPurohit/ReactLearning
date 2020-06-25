import React, { Component } from 'react'

export class ClassClick extends Component {
    ClickHandler(){
        console.log('Class Button Clicked'); 
    }
    render() {
        return (
            <div>
                <button onClick={this.ClickHandler}>Click</button>
            </div>
        )
    }
}

export default ClassClick