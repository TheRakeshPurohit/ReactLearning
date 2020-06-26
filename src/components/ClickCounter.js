import React, { Component } from 'react'
import HoverCounter from './HoverCounter'
import UpdatedComponent from './withCounter'

class ClickCounter extends Component {
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <HoverCounter />
                <button onClick={incrementCount}> {this.props.name} Clicked {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
