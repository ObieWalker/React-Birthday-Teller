import billionaires_json from '../data/billionaires.json'
import { ADD_BILLIONAIRE, REMOVE_BILLIONAIRE } from '../actions'
import { createBillionaire} from './helpers'


function billionaires(state = billionaires_json, action) {
    switch (action.type) {
        case ADD_BILLIONAIRE:
            let billionaires = state.filter(item => item.id !== action.id)
            return billionaires
        case REMOVE_BILLIONAIRE:
            billionaires = [...state, createBillionaire(action.id)]
            return billionaires
        default:
            return state;
    }
}


export default billionaires