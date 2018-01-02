import React, { Component} from 'react'
import {Form, FormControl, Button} from 'react-bootstrap'
import './App.css'
import AgeStats from './AgeStats'

var datePicker = {
    width: "200px",
    margin: "auto"
}

class App extends Component {  
    
    constructor() {
        super()

        this.state = {
            newDate: '',
            birthday: '1990-02-22',
            showStats: false
        }
    }

    changeBirthday() {
        console.log(this.state)
        this.setState({
            birthday: this.state.newDate,
            showStats: true
        })
    }
    render() {
        return (
            <div className="App"> 
                <Form>
                <h2> Enter your birthday</h2>
                    <FormControl style={datePicker}
                type="date"
                onChange = { event=> this.setState({newDate: event.target.value})}
                >
                </FormControl>
                <br/>
                <Button onClick = {() => this.changeBirthday()}>
                    Submit
                </Button>  
                {
                    this.state.showStats? 
                        <div className="fade age-stats">
                                <AgeStats date={this.state.birthday} />
                        </div>
                        :
                         <div></div>
                } 
                </Form>
            </div>
        )

    }
}

export default App