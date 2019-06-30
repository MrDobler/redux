import React, { Component } from 'react';
import Axios from 'axios';

class Post extends Component {
    state = {
        post: {}
    };

    componentDidMount() {
        let id = this.props.match.params.post_id;
        Axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {
                this.setState({
                    post: res.data
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { post } = this.state;
        const postContent = post ? (
            <div className="post">
                <h4 className="center">{post.title}</h4>
                <p>{post.body}</p>
            </div>
        ) : (
            <div class="center">
                <h4>Loading post...</h4>
            </div>
        );

        return (
            <div className="container">
                {postContent}
            </div>
        )
    };
}

export default Post;