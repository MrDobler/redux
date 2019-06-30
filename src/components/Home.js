import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Axios from 'axios';
import Pokeball from '../pokeball.png';

class Home extends Component {
    
    state = {
        posts: []
    }
    
    componentDidMount() {
        Axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0, 10)
                })
            })
            .catch(err => console.log(err));
    }
    
    render() {
        const { posts } = this.state;
        const postList = posts.length ? (
            posts.map(({id, title, body}) => {
                return (
                    <div className="post card" key={id}>
                        <img src={Pokeball} alt="Pokeball"/>
                        <div className="card-content">
                            <Link to={`/${id}`}><span className="card-title red-text">{title}</span></Link>
                            <p>{body}</p>
                        </div>
                    </div>
                )
            }
            )
        ) : (
         <div className="center">No posts pageYOffset.</div>   
        );

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

export default Home;