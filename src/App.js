import React, { Component } from 'react';
import { Ninjas } from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {
    state = {
        ninjas: [
            {name: 'Ryu', age: '30 ', belt: 'Black', id: 1},
            {name: 'Yoshi', age: '10', belt: 'Red', id: 2},
            {name: 'Crystal', age: '25', belt: 'Pink', id: 3}
        ]
    };

    addNinja = (ninja) => {
        ninja.id = Math.random();
        this.setState({
            ninjas: [...this.state.ninjas, ninja]
        });
    };

    deleteNinja = (id) => {
        let mNinjas = this.state.ninjas.filter((n) => n.id !== id);
        this.setState({ ninjas: mNinjas });
    };

    componentDidMount() {
        console.log('Component Mounted');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('Component Updated');
        console.log(prevProps, prevState);
    }

    render() {
        return (
            <div className="App">
                <h1>My First React App</h1>
                <p>Welcome :)</p>
                <Ninjas deleteNinja={this.deleteNinja} ninjas={ this.state.ninjas }/>
                <AddNinja addNinja={this.addNinja}></AddNinja>
            </div>
        );  
    }
}

export default App;
