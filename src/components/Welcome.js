import React, { Component } from 'react'

class Welcome extends Component {
    render () {
        const {name, heroName} = this.props;
        return (
            <div>
                <p> Hi, {name}! <br /> This is a Class Component, {heroName}</p>
            </div>
        )
    }
}

export default Welcome;