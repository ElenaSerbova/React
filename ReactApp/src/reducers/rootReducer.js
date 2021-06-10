import { combineReducers } from 'redux'

import header from '../containers/header/headerReducer'
import article from '../containers/articles/articleReducer'


export default combineReducers({    
    header,  
    article 
})