import * as React from 'react';
import Calendar from '/src/components/Calendar.jsx';
import { useParams } from 'react-router-dom';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { getCharity } from '../utils';
{/* This will be a component that takes the charity pages hardcoded
    into opportunities page and linked accordingly
    Props: bannerImg, Position[] with Title, Overview, Hours, Location,
     Contact, About, Images[] */}

    export default function CharityPage() {
        const [charity, setCharity] = React.useState();
        const { id } = useParams();

        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 4,
            },
            tablet: {
              breakpoint: { max: 1024, min: 700 },
              items: 3,
            },
            mobile: {
              breakpoint: { max: 700, min: 0 },
              items: 2,
            }
          };

        React.useEffect(() => {
            // Fetch charity data asynchronously
            const fetchCharity = async () => {
                const fetchedCharity = await getCharity(id);
                setCharity(fetchedCharity);
            };
    
            fetchCharity(); // Call the function to fetch charity data
        }, [id]); // Add id to dependency array to re-fetch data when id changes
    
        if (!charity) {
            return <div>Loading...</div>; // Render loading state while data is being fetched
        }
    
        return (
            <div>
                <img src={charity.bannerImg} />
                <h1>{charity.name}</h1>
                <div className='colorDiv1'>
                    <h3><u>{charity.positionTitle}</u></h3>
                    <p><strong>Overview: </strong>{charity.positionOverview}</p>
                </div>
                <br></br>
                <div className='colorDiv2'>
                    <h3>Where and When to Find Us!</h3>
                    <div>
                    <span><strong>Located: </strong>{charity.location}</span>
                    </div>
                    <br></br>
                    <div>
                        <strong>Hours:</strong>
                        <br></br>
                        <div>Monday: {charity.hours.monday}</div>
                        <div>Tuesday: {charity.hours.tuesday}</div>
                        <div>Wednesday: {charity.hours.wednesday}</div>
                        <div>Thursday: {charity.hours.thursday}</div>
                        <div>Friday: {charity.hours.friday}</div>
                        <div>Saturday: {charity.hours.saturday}</div>
                        <div>Sunday: {charity.hours.sunday}</div>
                    </div>
                    <br></br>
                    <div>
                        <strong>Contact:</strong>
                        <br></br>
                        <div><strong>Email: </strong>{charity.email}</div>
                        <div><strong>Phone: </strong>{charity.phone}</div>
                    </div>
                </div>
                <br></br>
                <div>
                    <h3>Get Scheduled</h3>
                    <Calendar />
                </div>
                <br></br>
                <div className='colorDiv1'>
                    <h3>About Us:</h3>
                    <p>{charity.about}</p>
                </div>
                <br></br>
                <div>
                    <h3>Our Volunteers in Action</h3>
                    <Carousel
                        draggable={false}
                        responsive={responsive}
                        infinite={true}
                        ssr={true}
                        keyBoardControl={true}
                        transitionDuration={1500}
                    >
                        {charity.images.map((image) => (
                            <img src={image} width="200 px" height="200 px" className='squareImg' />
                        ))}      
                    </Carousel>
                </div>
                <br></br>
            </div>
        )
    };