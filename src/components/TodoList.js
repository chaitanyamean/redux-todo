import React from 'react'
import './TodoList.css'
import NewTodo from './NewTodo';
import TodoListItem from './TodoListItem';
import {connect} from 'react-redux';

const TodoList = ({todos = []}) => {

    return(
        <div className="list-wrapper">
            <NewTodo />
            {todos.map((todo,i)=> <TodoListItem todo={todo} 
            key={i} 
            />)}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})


export default connect(mapStateToProps)(TodoList);