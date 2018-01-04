import React, { Component } from 'react'
import { connect } from 'react-redux'
import { removeBillionaireById } from '../actions'
import '../styles/index.css'

class RichList extends Component {
    render () {
        return (
            <div>
                <h4> Your Rich Squad</h4>
                <ul className="list-group">
                    {
                        this.props.riches.map(billionaire => {
                            return (
                                <li key={billionaire.id} className="list-group-item">
                                    <div className="list-item">{billionaire.name}</div>
                                    <div className="list-item right-button" onClick={() => this.props.removeBillionaireById(billionaire.id)}
                                    > *
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
    )}
}

function mapStateToProps(state) {
    return {
        riches: state.riches
    }
}


export default connect(mapStateToProps, {removeBillionaireById})(RichList)