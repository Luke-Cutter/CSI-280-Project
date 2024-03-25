
import {Calendar, momentLocalizer} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function BigCalendar(){

    const myEventsList = [];

    const MyCalendar = (props) => (
        <div>
            <Calendar 
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{height: 500}}
            />
        </div>
    )
    
    return(
        <div>
            <MyCalendar />
        </div>
    )
}

export default BigCalendar;