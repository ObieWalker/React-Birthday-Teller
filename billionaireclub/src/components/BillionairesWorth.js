import React, {Component} from 'react'
import { connect} from 'react-redux'

class BillionairesWorth extends Component {
    worth () {
        let worth = 0;
        this.props.riches.forEach(billionaire => worth += billionaire.worth)
        return worth
    }
    revenue () {
        let revenue = 0
        this.props.riches.forEach(billionaire => revenue += billionaire.revenue)
        return revenue 
    }
    render () {
        return (
            <div>
                <h4>Billionaires Worth</h4>
                <ul className="list-group ">
                <li className=" list-group-item text-left">
                    <b> Squad Cash: </b> {this.worth()}<br/>
                    <b> Company Revenue: </b> {this.revenue()}
                </li>

                </ul>
            </div>

        )
    }
}

function mapStateToProps (state) {
    return {
        riches: state.riches
    }
}

export default connect(mapStateToProps, null)(BillionairesWorth)