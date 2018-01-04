export const ADD_BILLIONAIRE = 'ADD_BILLIONAIRE'
export const REMOVE_BILLIONAIRE = 'REMOVE_BILLIONAIRE'

export function addBillionaireById(id) {
    const action = {
        type : ADD_BILLIONAIRE,
        id
    }
    return action
}

export function removeBillionaireById(id) {
    const action = {
        type: REMOVE_BILLIONAIRE,
        id
    }
    return action
}