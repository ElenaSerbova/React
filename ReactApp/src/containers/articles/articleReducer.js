import { GET_ARTICLES_SUCCESS, GET_ARTICLES_ERROR } from './articleConstants'

const initialState = {
    data: [],   
    error: ''
}

export default function article(state = initialState, action) {
    switch (action.type) {
        case GET_ARTICLES_SUCCESS:            
            return {...state, data: action.payload, error: '' };

        case GET_ARTICLES_ERROR:
            return {...state, error: action.payload }    

        default:
            return state;
    }
}