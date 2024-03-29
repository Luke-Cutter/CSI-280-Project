import React from 'react';
import PropTypes from 'prop-types';

// followed tutorial from https://derrickotte.medium.com/how-to-create-a-calendar-from-scratch-in-react-1f2db197454d

function CalendarDays(props) {

    CalendarDays.propTypes = {
        day: PropTypes.instanceOf(Date).isRequired,
        changeCurrentDay: PropTypes.func.isRequired,
    };

    let firstDayOfMonth = new Date(props.day.getFullYear(), props.day.getMonth(), 1);
    let weekdayOfFirstDay = firstDayOfMonth.getDay();
    let currentDays = [];

    for (let day = 0; day < 42; day++) {
        if (day === 0 && weekdayOfFirstDay === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - 7);
        } else if (day === 0) {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() - weekdayOfFirstDay);
        } else {
            firstDayOfMonth.setDate(firstDayOfMonth.getDate() + 1);
        }

        let calendarDay = {
            currentMonth: (firstDayOfMonth.getMonth() === props.day.getMonth()),
            date: (new Date(firstDayOfMonth)),
            month: firstDayOfMonth.getMonth(),
            number: firstDayOfMonth.getDate(),  
            selected: (firstDayOfMonth.toDateString() === props.day.toDateString()),
            year: firstDayOfMonth.getFullYear()
        }

        currentDays.push(calendarDay);
    }

    return (
        <div className="table-content">
            {
                currentDays.map((day) => {
                    return (
                        <div key={day.date.toISOString()} className={"calendar-day" + (day.currentMonth ? " current" : "") + (day.selected ? " selected" : "")}
                                onClick={() => props.changeCurrentDay(day)}>
                            <p>{day.number}</p>
                        </div>
                    )
                })
            }
        </div>
    )
        }

export default CalendarDays;