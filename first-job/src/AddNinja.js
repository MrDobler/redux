import React, { Component } from 'react';

export default class AddNinja extends Component {
    
    state = {
        name: null,
        age: null,
        belt: null
    };

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        let ninja = { 
            id: '',
            name: this.state.name,
            age: this.state.age,
            belt: this.state.belt
        };
        this.props.addNinja(ninja);
    };
    
    render() {
        return (
            <div>
                <h3>Form</h3>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChange}/>
                    
                    <label htmlFor="age">Age:</label>
                    <input type="text" id="age" onChange={this.handleChange}/>
                    
                    <label htmlFor="belt">Belt:</label>
                    <input type="text" id="belt" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}