import { useState } from 'react'

export default function Home() {
    const [count, setCount] = useState(0)

    return (
    <div>
    <img src= "\homepage-banner.png" alt="Temporary Banner" />
      <div className="colorDiv1">
        <h3>This Week's Highlighted Charities</h3>
        {/*Featured Charities Components will go here*/}
        <span>Click to Explore these Charities!</span>
      </div>
      <div>
        <h3>Volunteer Helper is YOUR One Stop Shop for Finding the Perfect Opportunity</h3>
        {/*Picture carousel here*/}
        <h3>Get Searching!</h3>
        {/*Charity Profiles carousel here*/}
      </div>
      <div className="colorDiv2">
        <h3>User Testimonials</h3>
        <span>"As a busy professional, I didn't think I had the time to volunteer.  However, Volunteer Helper changed my perspective. With its flexible  opportunities and easy sign-up process, I've been able to volunteer on  my own schedule and give back to causes I'm passionate about. Thank you,  Volunteer Helper, for making it so accessible!" - Emily T.</span>
        <br></br><br></br>
        <span>"Volunteer Helper has been a lifesaver for our nonprofit organization.  We struggled to find volunteers before, but ever since we listed our  opportunities on Volunteer Helper, we've seen a significant increase in  volunteer applications. The platform's reach and visibility have helped  us attract dedicated volunteers who are eager to support our mission." -  Mark S., Nonprofit Director</span>
      </div>
      <div>
        <h3>Volunteer Helper Heroes</h3>
        {/*Hero Picture carousel here*/}
      </div>
    </div>
    )
}