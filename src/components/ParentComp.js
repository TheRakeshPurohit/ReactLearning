import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComponents from './PureComponents'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: 'Rakesh'
        }
    }
    
    componentDidMount(){
        setInterval(()=> {
            this.setState({
                name: 'Rakesh'
            })
        },2000)
    }

    render() {
        console.log("Parent")
        return (
            <div> Parent Component
            <RegComp name={this.state.name}></RegComp>
            <PureComponents name={this.state.name}></PureComponents>
            </div>
        )
    }
}

export default ParentComp
