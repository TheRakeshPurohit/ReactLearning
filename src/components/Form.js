import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topic: 'react'
        }
    }

    HandleUsername = event => {
        this.setState({
            username: event.target.value
        })
    }

    HandleComments = event => {
        this.setState({
            comments: event.target.value
        })
    }

    HandleTopicSelect = event => {
        this.setState({
            topic: event.target.value
        })
    }
    
    handleSubmit = event =>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                        <input
                        value={username}
                        type='text'
                        onChange={this.HandleUsername} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.HandleComments}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.HandleTopicSelect}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }
}

export default Form
