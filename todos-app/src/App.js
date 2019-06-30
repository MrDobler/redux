import React, { Component } from 'react';

import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

class App extends Component {
   
    state = {
        todos: [
            { id: 1, content: 'Comprar leite.'},
            { id: 2, content: 'Programar' }
        ]
    };

    deleteTodo = (id) => {
        const mTodos = this.state.todos.filter(todo => todo.id !== id);
        this.setState({
            todos: mTodos
        });
    };

    addTodo = (todo) => {
        console.log(todo);
        this.setState({
            todos: [...this.state.todos, todo]
        });
    };

    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos deleteTodo={this.deleteTodo} todos={this.state.todos}/>
                <AddTodo addTodo={this.addTodo} />
            </div>
        );  
    }
}

export default App;
