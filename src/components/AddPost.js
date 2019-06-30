import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addPost } from '../actions/postActions';

class AddPost extends Component {


    handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.floor(Math.random() * 100);
        const title = this.getTitle.value;
        const body = this.getBody.value;
        const post = { id, title, body };
        this.props.addPost(post);
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h4 className="center">Add New Post</h4>
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s12">
                                <input type="text" ref={(input) => this.getTitle = input} placeholder="Title"/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea className="materialize-textarea" placeholder="Body" ref={(textarea) => this.getBody = textarea}></textarea>
                            </div>
                        </div>
                        <button className="btn red" type="submit">Add</button>
                    </form>
                </div >
            </div>
        );
    }
}

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: (post) => dispatch(addPost(post))
    };
};
 
export default connect(mapStateToProps, mapDispatchToProps)(AddPost);