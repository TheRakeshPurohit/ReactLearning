import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: 'Astala Vista'
        }

        this.ClickBindMethod = this.ClickBindMethod.bind(this);
    }
    
    ClickBindMethod(){
        this.setState({
            message: 'Why you clicked ?'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.ClickBindMethod}>CLICK Bind</button>
            </div>
        )
    }
}

export default EventBind
