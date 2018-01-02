import React, { Component} from 'react';
import party from '../assets/party.jpeg'


class AgeStats extends Component {
    timeSince(date) {
        let today = new Date()
        let bDay = new Date(date)
        //let thisYear = other_date.setFullYear("2018")
        //let bDay = (other_date).setFullYear("2018");

        if (today.getMonth() < bDay.getMonth()) {
            today = today.getTime()
            bDay.setFullYear(2018)
            bDay = bDay.getTime()
            let difference = Math.abs(bDay - today);
            let days = Math.floor(difference / (1000 * 3600 * 24));
            let years = Math.floor(days / 365)
            days -= years * 365
            let months = Math.floor(days / 31)
            days -= months * 31

            return `your birthday is ${months} months and ${days} days from now`;
        }
        else if (today.getMonth() > bDay.getMonth() || (today.getMonth() === bDay.getMonth() && today.getDate() > bDay.getDate())) {
                return `Your birthday has passed but Congratulations all the same`
        }
        else if (today.getMonth() === bDay.getMonth() && today.getDate() !== bDay.getDate()) {

        
            today = today.getTime()
            bDay.setFullYear(2018)
            bDay = bDay.getTime()
            let difference = Math.abs(today - bDay);
            let days = Math.floor(difference / (1000 * 3600 * 24));
            let years = Math.floor(days / 365)
            days -= years * 365

            return `your birthday is ${days+1} day(s) away from now`;
        }
        else if (today.getMonth() === bDay.getMonth() && today.getDate() === bDay.getDate()) {
            console.log(bDay)
            return `I think today is your birthday, WOHOOO!!`
        }
    };
    render() {
        return (
            <div>
                <h3>{this.props.date}</h3>  
                <br/>
                <h4> OK, so {this.timeSince(this.props.date)}</h4> 
                <img src={party} alt="party" className="party"/>         
            </div>
        )
    }
}

export default AgeStats