import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rakesh'
        }
        console.log('LifecycleB Constructor')
    }
    
    static getDrivedStateFromProps(props,state){
        console.log('LifecycleB getDrivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB componentDidMount')
    }
    render() {
        console.log('LifecycleB render')
        return (
            <div>
            LifecycleB
            </div>
        )
    }
}

export default LifecycleB
