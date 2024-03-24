export default function About() {
    return (
    <div>
        <img src= "\about-banner.png" alt="Temporary About Banner" />
        <h1>Our Mission</h1>
        <div>
            <h4>Meet Our Founders</h4>
            {/*Founder pictures go here*/}
        </div>
        <div className="colorDiv1">
            <h4>Our Mission and the Future of Volunteer Helper</h4>
            {/*Featured Charities Components will go here*/}
            <span>At Volunteer Helper, our mission is to empower individuals to make a positive impact in their communities through volunteerism. We believe that everyone has something valuable to contribute, and by connecting volunteers with meaningful opportunities, we aim to create a ripple effect of kindness and change. Looking towards the future, we are committed to expanding our platform's reach, enhancing user experiences, and fostering deeper connections between volunteers and organizations. We envision Volunteer Helper as not only a resource for finding volunteer opportunities but also as a catalyst for building stronger, more compassionate communities where everyone feels inspired and empowered to give back. Together, we can continue to make a difference, one volunteer at a time.</span>
            <br></br><br></br>
            {/*Below can be a lighter green, like in the figma*/}
            <span>“Volunteers  are the only human beings on the face of the earth who reflect this  nation’s compassion, unselfish caring, patience, and just plain loving  one another.” -Erma Bombeck</span>
        </div>
        <div>
            <h4>We Want to Hear From You!</h4>
            <span>We value your feedback and insights! Whether you have questions,  suggestions, or just want to share your volunteering experiences, we're  here to listen. Your input helps us improve and better serve our  community. Reach out to us today and let your voice be heard!</span>
                {/*Email contact form will go here*/}
        </div>
      </div>
    )
}