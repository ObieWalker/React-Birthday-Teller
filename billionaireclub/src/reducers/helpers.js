import billionaires_json from '../data/billionaires.json'

export function createBillionaire(id) {
    let billionaire = billionaires_json.find(b => b.id === id)
    return billionaire
}
