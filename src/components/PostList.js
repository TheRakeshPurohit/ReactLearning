import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            posts: []
        }
    }
    
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({
                posts: response.data
            })
        })
        .catch(error =>{
            console.log(error);
        })
    }

    render() {
        const {posts} = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post =>
                    <div key={post.id}>
                        <h1 > {post.userId} </h1>
                        <h2 align="left"> {post.title} </h2>
                        <p align="right"> {post.body} </p>
                    </div>
                    ) :
                    <h4>No Records Found</h4>
                }
            </div>
        )
    }
}

export default PostList
