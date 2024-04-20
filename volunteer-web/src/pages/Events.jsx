import React, { useState } from 'react';
import Card from '../components/Card'

function getCurrentDate() {
    {/*Formatting for Full Day or Month Names might require another function*/}
    const today = new Date();
    return today.toDateString();
}

export default function Events() {
    const [currentDate, setCurrentDate] = useState(getCurrentDate());
    const events = {
        april: [
            {
                title: "VH Earth Day Conservation Drive (PAST)",
                image: "/event-image-4.png",
                overview: "Join VH on April 14th for the \"Earth Day Conservation Drive.\" On this  day, we unite to protect our planet through initiatives like tree  planting, recycling campaigns, and community clean-ups. Let's honor  Earth Day by taking meaningful action to preserve our environment for  future generations.",
                color: "colorDiv2",
                buttonLink: "/",
            },
            {
                title: "VH Spread Love Day",
                image: "/event-image-1.png",
                overview: "On April 23rd, join VH for \"VH Spread Love Day,\" a celebration of  compassion and kindness. Through simple acts of generosity and volunteer  efforts, let's make Valentine's Day a day to spread love to those who  need it most, bringing warmth and smiles to our community.",
                color: "colorDiv2",
                buttonLink: "/",
            }
        ],
        may: [
            {
                title: "VH Church Street Performance Day",
                image: "/event-image-2.png",
                overview: "Get ready for May 10th, VH's \"Church Street Performance Day,\" a  dynamic showcase of local talent. From musicians to dancers, come  witness the vibrant energy of our community as we fill Church Street  with music, laughter, and applause, uniting in celebration of creativity and togetherness.",
                color: "colorDiv1",
                buttonLink: "/",
            },
            {
                title: "VH Youth Empowerment Workshop",
                image: "/event-image-3.png",
                overview: "Mark your calendars for May 31st, VH's \"Youth Empowerment Workshop.\"  Through mentorship and skill-building activities, we'll inspire young  minds to reach their full potential, fostering a sense of purpose and  creating pathways for positive change in our communities.",
                color: "colorDiv1",
                buttonLink: "/",
            },
        ],
        june: [
            {
                title: "VH Community Health Fair",
                image: "/event-image-5.png",
                overview: "Save the date: June 28th is the VH \"Community Health Fair.\" This event  offers free health screenings, wellness workshops, and resources for  all. Together, let's prioritize health and well-being as we come  together to promote a healthier, happier community for everyone.",
                color: "colorDiv2",
                buttonLink: "/",
            }
        ]
    };

    return (
    <div>
        <img src= "\events-banner.png" alt="Temporary Events Banner" />
        <h1>Volunteer Helper Events</h1>
        <h3>Events Coming Up (All Events are Free!):</h3>
        <h4>Today's Date: {currentDate}</h4>
        <div>
            <h4 align="left">April:</h4>
            {/*Insert March event cards here*/}
            {events.april.map((event) => (
                <Card   title={event.title} 
                        image={event.image} 
                        overview={event.overview}  
                        color={event.color} 
                        buttonLink={event.buttonLink} 
                        buttonText="Add to Google Calendar">
                </Card>              
            ))}
        </div>
        <div>
            <h4 align="left">May:</h4>
            {/*Insert April event cards here*/}
            {events.may.map((event) => (
                <Card   title={event.title} 
                        image={event.image} 
                        overview={event.overview}  
                        color={event.color} 
                        buttonLink={event.buttonLink} 
                        buttonText="Add to Google Calendar">
                </Card>
            ))}
        </div>
        <div>
            <h4 align="left">June:</h4>
            {/*Insert May event cards here*/}
            {events.june.map((event) => (
                <Card   title={event.title} 
                        image={event.image} 
                        overview={event.overview}  
                        color={event.color} 
                        buttonLink={event.buttonLink} 
                        buttonText="Add to Google Calendar">
                </Card>
            ))}
        </div>
        <br></br>
    </div>
    )
}