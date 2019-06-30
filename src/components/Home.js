import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getPost } from '../actions/postActions';

import Pokeball from '../pokeball.png';

class Home extends Component {
    
    handleSubmit = (e) => {
        e.preventDefault();
        let search = this.getSearch.value;
        this.props.getPost(search);
    };
    
    render() {
        let { posts } = this.props;

        let postList = posts.length ? (
            posts.map(({id, title, body}) => {
                    return (
                        <div className="post card" key={id}>
                            <img src={Pokeball} alt="Pokeball"/>
                            <div className="card-content">
                                <Link to={`/${+id}`}><span className="card-title red-text">{title}</span></Link>
                                <p>{body}</p>
                            </div>
                        </div>
                    );
                }
            )
        ) : (
         <div className="center">No posts yet.</div>   
        );

        return (
            <div className="container home">
                <h4 className="center">Home</h4>
                <Link to="/add"><button className="btn red">New Post</button></Link>
                <form onSubmit={this.handleSubmit}>
                    <div className="input-field col s12">
                        <input type="text" ref={(input) => this.getSearch = input} placeholder="Search Title & Enter"/>
                    </div>
                </form>
                {postList}
            </div>
        );
    }
}


const mapStateToProps = (state) => ({ posts: state.posts, search: state.search });

const mapDispatchToProps = (dispatch) => {
    return {
        getPost: (title) => dispatch(getPost(title))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);