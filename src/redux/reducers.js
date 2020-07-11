

import {CREATE_TODO, REMOVE_TODO} from './actions';

export const todos = (state=[], action) => {
    console.log(action, state);
        switch (action.type)  {

            case CREATE_TODO: {
                const newTodo ={
                    text: action.payload.text,
                    isCompleted: false
                }
                    return state.concat(newTodo);
            }
            case REMOVE_TODO: {
                return state.filter(todo => todo.text !== action.payload.text);
            }


            default:
            return state;
        }

}

// It brings all our state - existing todos one, two three, four ---- one ---> two,three,four

/*
// state.map(todo => {
        if(todo.text === action.payload.text) {
            return {
                ...todo,
                isCompleted: true
            }
            return todo;
        }
})

