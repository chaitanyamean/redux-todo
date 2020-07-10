

import {CREATE_TODO} from './actions';

export const todos = (state=[], action) => {
    console.log(action);
        switch (action.type)  {

            case CREATE_TODO: {
                    return state.concat(action.payload.text);
            }

            default:
            return state;
        }

}