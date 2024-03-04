import React, { Component } from 'react';
import CalendarDays from './CalendarDays';
import './Calendar.css';

// followed tutorial from https://derrickotte.medium.com/how-to-create-a-calendar-from-scratch-in-react-1f2db197454d

export default class Calendar extends Component {
    constructor() {
        super();

        this.weekdays=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.state={currentDay: new Date()};
    }

    changeCurrentDay = (day) => {
        this.setState({ currentDay: new Date(day.year, day.month, day.number) });
    }

    render() {
        return (
            <div className="calendar">
                <div className="calendar-header">
                    <h2>{this.months[this.state.currentDay.getMonth()]} {this.state.currentDay.getFullYear()}</h2>
                </div>
                <div className="calendar-body">
                    <div className="table-header">
                        {
                            this.weekdays.map((weekday, index) => {
                                return <div key={index} className="weekday">{weekday}</div>
                            })
                        }
                    </div>
                    <CalendarDays day={this.state.currentDay} changeCurrentDay={this.changeCurrentDay} />
                </div>
                <div>
                </div>
            </div>
        ); 
    }
}
