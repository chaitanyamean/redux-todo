import React from 'react'
import './TodoList.css'
import NewTodo from './NewTodo';
import TodoListItem from './TodoListItem';
import {connect} from 'react-redux';
import {removeTodos} from '../redux/actions';

const TodoList = ({todos = [], onRemoveTodoClicked}) => {

    return(
        <div className="list-wrapper">
            <NewTodo />
            {todos.map((todo,i)=> <TodoListItem todo={todo} 
            key={i} onRemoveTodoClicked={onRemoveTodoClicked}
            />)}
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,    
})

const mapDispatchToProps = dispatch => ({
    onRemoveTodoClicked: text => dispatch(removeTodos(text)),
})

// Creating connection between component to redux

// 1) We need to connect our component to redux using connect from react-redux
// 2) mapStateToProps ---> 
// 3) remove a todo --- but it should happen in redux ---> removeTodo

/// Youtube chaneels as reducers here

// todos
// cart
// dashboard 
// orders


export default connect(mapStateToProps, mapDispatchToProps)(TodoList);