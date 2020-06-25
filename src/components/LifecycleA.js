import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rakesh'
        }
        console.log('LifecycleA Constructor')
    }
    
    static getDrivedStateFromProps(props,state){
        console.log('LifeCycleA getDrivedStateFromProps')
        return null
    }
    componentDidMount(){
        console.log('lifecycleA componentDidMount')
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div> LifeCycleA </div>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
