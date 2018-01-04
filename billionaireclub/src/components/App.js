import React, { Component } from "react";
import BillionaireList from './BillionaireList'
import RichList  from './RichList'
import BillionairesWorth from './BillionairesWorth'
import '../styles/index.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <h2>The Billionaire Gang </h2>
                <div class="row">
                <div className="col-md-4">
                <BillionaireList/>
                </div>
                <div className="col-md-4">
                <RichList />
                </div>
                <div className="col-md-4">
                <BillionairesWorth />
                </div>
                </div>
            </div>
        )
    }
}
export default App;