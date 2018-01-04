import React, { Component} from 'react'
import { connect} from 'react-redux'
//import {bindActionCreators} from 'redux'
import {addBillionaireById} from '../actions'
import '../styles/index.css'

class BillionaireList extends Component {
    render() {
        console.log('this.props', this.props)
        return (
            <div>
                <h4> Choose your Billionaires</h4>
                <ul className="list-group">
                    {
                        this.props.billionaires.map(billionaire => {
                            return (
                                <li key={billionaire.id} className="list-group-item">
                                    <div className="list-item">{billionaire.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.addBillionaireById(billionaire.id)}
                                    > +
                                    </div>
                                </li>
                            )
                        })
                    }
                    </ul>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        billionaires: state.billionaires
    }
}
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ addBillionaireById}, dispatch)
// }

export default connect(mapStateToProps, { addBillionaireById })(BillionaireList)