import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Gallery() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
        },
        tablet: {
          breakpoint: { max: 1024, min: 700 },
          items: 4,
        },
        mobile: {
          breakpoint: { max: 700, min: 0 },
          items: 3,
        }
      };

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
            <Carousel
                draggable={false}
                responsive={responsive}
                infinite={true}
                ssr={true}
                keyBoardControl={true}
                transitionDuration={1500}
            >
                    <img src= "\sponsor-1.png" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-2.jpg" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-3.jpg" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-4.png" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-5.jpg" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-6.jpg" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-7.png" width="120 px" height="120 px" className="squareImg"/>
                    <img src= "\sponsor-8.png" width="120 px" height="120 px" className="squareImg"/>
        </Carousel>

        </div>
        <div>
            <h4>Our Favorite Volunteer Quote of March</h4>
            <i>“Volunteering is an act of heroism on a grand scale. And it  matters profoundly. It does more than help people beat the odds; it  changes the odds.” </i>
            <span>— Bill Clinton</span>
        </div>
        <br></br>
    </div>
    )
}