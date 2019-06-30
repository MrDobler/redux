import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';
import AddPost from './components/AddPost';

class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="poke-times">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} /> 
                        <Route exact path="/add" component={AddPost}/>
                        <Route exact path="/:post_id" component={Post}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );  
    }
}

export default App;
