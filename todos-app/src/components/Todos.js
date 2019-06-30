import React from 'react';

const Todos = ({todos, deleteTodo}) => {

    let todosList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span style={{ cursor: 'pointer' }} onClick={() => { deleteTodo(todo.id) }}>{todo.content}</span>
                </div>
            )
        })
        ) : (
            <p className="center">You have no todo's left.</p>
        );
    
    return (
        <div className="todos collection">
            {todosList}
        </div>
    );
}

export default Todos;