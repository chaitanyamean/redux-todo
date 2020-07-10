import React, {useState} from 'react'

import './NewTodo.css';

import {connect} from 'react-redux';

import {addTodos} from '../redux/actions';


const NewTodo = ({todos, onCreateTodo}) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <div className="new-todo-form">
            <input
                className="new-todo-input"
                type="text"
                placeholder="Type your new todo here"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <button
                onClick={() => {
                    const isDuplicate =
                            todos.some(todo => todo.text === inputValue)
                            if(!isDuplicate) {
                                onCreateTodo(inputValue)
                                setInputValue('')
                            }
                }}
                className="new-todo-button">
                Create Todo
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    todos: state.todos,
})

const mapDispatchToProps = dispatch => ({
    onCreateTodo: text => dispatch(addTodos(text))
})

export default connect(mapStateToProps,mapDispatchToProps)(NewTodo);