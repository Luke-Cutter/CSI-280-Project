export default function Gallery() {
    return (
    <div>
        <img src= "\gallery-banner.png" alt="Temporary Gallery Banner" />
        <h1>Volunteer Helpers Hero Gallery</h1>
        <div className="colorDiv2">
            <h4 align="left">A Message of Gratitude</h4>
            <span>At Volunteer Helpers, we firmly believe that the success of our  volunteering efforts hinges on the dedication and passion of our  volunteers. Their commitment to serving others, making a positive  impact, and building a stronger community is what drives our collective  success. We recognize that every hour volunteered, every smile shared,  and every life touched represents a milestone in our journey toward  creating a better world. Their success in volunteering is indeed our  success, as it reflects the fulfillment of our mission to uplift and  support those in need. Together, we celebrate the meaningful difference  we make, knowing that our collaborative efforts are changing lives and  fostering a brighter future for all. At the heart of our success are the dedicated individuals who generously give their time and energy to Volunteer Helpers.</span>
        </div>
        <div className="colorDiv1">
            <h4>Images of Some of Our Most Devoted Volunteers</h4>
            {/*Picture Collage Here*/}
            <h4>Our Sponsors:</h4>
            {/*Sponser Carousel Here*/}
        </div>
        <div>
            <h4>Our Favorite Volunteer Quote of March</h4>
            <i>“Volunteering is an act of heroism on a grand scale. And it  matters profoundly. It does more than help people beat the odds; it  changes the odds.” </i>
            <span>— Bill Clinton</span>
        </div>
    </div>
    )
}