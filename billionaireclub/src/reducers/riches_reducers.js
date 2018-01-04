import { ADD_BILLIONAIRE, REMOVE_BILLIONAIRE } from '../actions'
import { createBillionaire} from './helpers'

function riches(state = [], action) {
    switch (action.type) {
        case ADD_BILLIONAIRE:
            let riches = [...state, createBillionaire(action.id)]
            return riches
        case REMOVE_BILLIONAIRE:
            riches = state.filter(item => item.id !== action.id)
            return riches
        default:
            return state;
    }
}

export default riches