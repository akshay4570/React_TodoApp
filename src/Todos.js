import React from 'react';

const Todos = ({todos,deleteTodo}) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo.id}>
                    <span className="text-set">{todo.content}</span>
                    <button onClick={() => {deleteTodo(todo.id)}} className="btn">Delete</button>
                    <hr/>
                </div>
            )
        })
    ) : (
        <p className="warning">You have no todo's left,Yay!!</p>
    )
    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;