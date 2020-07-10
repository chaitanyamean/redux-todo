

export const CREATE_TODO = 'CREATE_TODO';

export const addTodos =  text => ({
    type: CREATE_TODO,
    payload: {text}
})


// export const removeTodo