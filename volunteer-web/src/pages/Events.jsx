import React, { useState } from 'react';

function getCurrentDate() {
    {/*Formatting for Full Day or Month Names might require another function*/}
    const today = new Date();
    return today.toDateString();
}

export default function Events() {
    const [currentDate, setCurrentDate] = useState(getCurrentDate());

    return (
    <div>
        <img src= "\events-banner.png" alt="Temporary Events Banner" />
        <h1>Volunteer Helper Events</h1>
        <h3>Events Coming Up (All Events are Free!):</h3>
        <h4>Today's Date: {currentDate}</h4>
        <div>
            <h4 align="left">March:</h4>
            {/*Insert March event cards here*/}
        </div>
        <div>
            <h4 align="left">April:</h4>
            {/*Insert April event cards here*/}
        </div>
        <div>
            <h4 align="left">May:</h4>
            {/*Insert May event cards here*/}
        </div>
    </div>
    )
}