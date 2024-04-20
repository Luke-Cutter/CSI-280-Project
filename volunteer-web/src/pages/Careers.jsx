import Card from '/src/components/Card.jsx'

export default function Careers() {
    const careers = [
            {
                title: "Community Outreach Coordinator:",
                image: "/extra-image-6.png",
                overview: "We're looking for a proactive Community Outreach Coordinator to connect  with local communities, organize engaging events, and forge partnerships  on behalf of Volunteer Helpers. If you're passionate about building  bridges, driving positive change, and fostering community spirit, this  role is for you. Join us in spreading our mission far and wide, creating  lasting impact, and bringing people together for the greater good.",
                color: "colorDiv1",
            },
            {
                title: "Communications Specialist:",
                image: "/extra-image-1.png",
                overview: "Are you a skilled communicator with a passion for storytelling and  engagement? From crafting  compelling content to managing social media platforms, you'll play a key  role in elevating our organization's visibility and connecting with  supporters worldwide. If you're ready to harness the power of  communication to drive positive change, we invite you to join our team  and help us share our mission with the world.",
                color: "colorDiv2",
            },
            {
                title: "Fundraising Manager:",
                image: "/extra-image-8.png",
                overview: "Calling all strategic thinkers and relationship builders! In this role,  you'll have the opportunity to develop innovative fundraising  strategies, cultivate donor relationships, and mobilize support for our  mission. If you're driven by the desire to make a meaningful impact and  have a knack for turning philanthropic aspirations into reality, we  invite you to join us in advancing our cause and changing lives for the  better. Pay:",
                color: "colorDiv1",
            },
            {
                title: "Volunteer Coordinator:",
                image: "/extra-image-7.png",
                overview: "Join our team as a Volunteer Coordinator and play a pivotal role in  shaping the volunteer experience at Volunteer Helpers. You'll be  responsible for recruiting, training, and supporting our dedicated  volunteers, ensuring they feel valued and empowered to make a  difference. If you have a knack for building relationships, organizing  logistics, and fostering a sense of belonging, we welcome you to join us  in building a vibrant volunteer community.",
                color: "colorDiv2",
            },
            {
                title: "Administrative Assistant:",
                image: "/extra-image-12.png",
                overview: "Volunteer Helpers is seeking an Administrative Assistant to provide  vital support in day-to-day operations. Responsibilities include  managing correspondence, scheduling appointments, and maintaining  records. If you're detail-oriented, organized, and proficient in office  software, join us in supporting our mission to make a difference in our  community.",
                color: "colorDiv1",
            }
    ];
    
    return (
    <div>    
        <img src= "\careers-banner.png" alt="Temporary Career Banner" />
        <h1>Jobs with Volunteer Helpers</h1>
        <h4>Jobs Available:</h4>
        {/*Insert job cards here*/}
        {careers.map((career) => (
            <Card   title={career.title} 
                    image={career.image} 
                    overview={career.overview}  
                    color={career.color} 
                    buttonLink="/email-us"
                    buttonText="Email Us">
            </Card>              
        ))}
        <br></br><br></br>
    </div>
    )
}