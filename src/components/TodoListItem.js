import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({todo, onRemoveTodoClicked}) => {
    return (
        <div className="todo-item-container">
        <h3>{todo.text}</h3>
        <div className="buttons-container">
             <button className="completed-button">Mark As Completed</button>
            <button className="remove-button" 
            onClick={()=> onRemoveTodoClicked(todo.text)}
            >Remove</button>
        </div>
    </div>
    )
}

export default TodoListItem;