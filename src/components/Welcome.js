import React, { Component } from 'react'

class Welcome extends Component {
    render () {
        return (
            <div>
                <p> Hi, {this.props.name}! <br /> This is a Class Component, {this.props.heroName}</p>
            </div>
        )
    }
}

export default Welcome;