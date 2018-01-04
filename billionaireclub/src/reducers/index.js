import { combineReducers } from 'redux';  

import billionaires from './billionaires_reducers'
import riches from './riches_reducers'



const rootReducer = combineReducers ({
    billionaires,
    riches
})

export default rootReducer