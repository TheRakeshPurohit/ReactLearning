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

    shouldComponentUpdate(){
        console.log('LifecycelA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('LifecycelA getSSB4Update')
        return null
    }

    componentDidUpdate(){
        console.log('LifecycelA componentDidUpdate')
    }

    changeState(){
        this.setState({
            name: 'Rakesh HP'
        })
    }
    render() {
        console.log('LifeCycleA render')
        return (
            <div>
                <div> LifeCycleA </div>
                <button onClick={() => this.changeState()}>Change State</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
