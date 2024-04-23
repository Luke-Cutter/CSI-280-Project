import Card from '/src/components/Card.jsx';

export default function Opportunities() {
    const charities = [
        {
            title: "GREEN MOUNTAIN ANIMAL RESCUE",
            image: "/greenmountainaimalrescue_logo.jpg",
            overview: "Green Mountain Animal Rescue is a non-profit organization dedicated to  saving the lives of abandoned, abused, and neglected animals in the  Burlington area. Our mission is to provide shelter, medical care, and  adoption services to help animals find loving forever homes.", 
            color: "colorDiv1",
            buttonLink: "aaa"
        },
        {
            title: "CHAMPLAIN VALLEY LITERACY FOUNDATION",
            image: "/champlainvalleyliteracy_logo.jpg",
            overview: "The Champlain Valley Literacy Foundation is a non-profit organization  committed to promoting adult literacy in the Burlington community. We  believe that everyone deserves the opportunity to improve their reading,  writing, and basic math skills, regardless of their age or background.", 
            color: "colorDiv2",
            buttonLink: "aab"
        },
        {
            title: "BURLINGTON COMMUNITY GARDEN NETWORK",
            image: "/burlingtoncommunitygarden_logo.jpg",
            overview: "The Burlington Community Garden Network is a non-profit organization  that promotes sustainable urban agriculture and food security in the  Burlington area. We believe that everyone should have access to fresh,  healthy food, regardless of their income or background.", 
            color: "colorDiv1",
            buttonLink: "aac"
        },
        {
            title: "LAKE CHAMPLAIN ENVIRONMENTAL COUNCIL",
            image: "/lakechamplainenvironmental_logo.jpg",
            overview: "The Lake Champlain Environmental Council is a non-profit organization  dedicated to protecting and preserving the ecological health of Lake  Champlain and its surrounding watershed. We believe that a healthy lake  is essential for the well-being of our community, our economy, and our  environment.", 
            color: "colorDiv2",
            buttonLink: "aad"
        },
        {
            title: "BURLINGTON YOUTH ARTS CENTER",
            image: "/burlingtonyouthart_logo.jpg",
            overview: "The Burlington Youth Arts Center is a non-profit organization that  provides free arts education to underserved youth in the Burlington  area. We believe that every child deserves the opportunity to express  themselves creatively and develop their artistic skills, regardless of  their family's income or background.", 
            color: "colorDiv1",
            buttonLink: "aae"
        },
        {
            title: "CHAMPLAIN VALLEY REFUGEE SUPPORT NETWORK",
            image: "/champlainvalleyrefugee_logo.jpg",
            overview: "The Champlain Valley Refugee Support Network is a non-profit  organization that provides comprehensive support services to refugee  families resettling in the Burlington area. We believe that refugees  deserve the opportunity to build new lives in safety and dignity, and we  work to provide the resources and support they need to thrive.", 
            color: "colorDiv2",
            buttonLink: "aaf"
        },
        {
            title: "BURLINGTON COMMUNITY BIKE SHOP",
            image: "/burlingtonbike_logo.jpg",
            overview: "The Burlington Community Bike Shop is a non-profit organization that  promotes sustainable transportation and access to affordable bicycles in  the Burlington area. We believe that bicycles are a powerful tool for  personal empowerment, community building, and environmental  sustainability, and we work to make them accessible to everyone.", 
            color: "colorDiv1",
            buttonLink: "aag"
        },
        {
            title: "GREEN MOUNTAIN MUSIC FOUNDATION",
            image: "/greenmountainmusic_logo.jpg",
            overview: "The Green Mountain Music Foundation is a non-profit organization that  promotes the therapeutic benefits of music and provides music therapy  services to individuals and communities in the Burlington area. We  believe that music has the power to heal, inspire, and transform lives,  and we work to make music therapy accessible to everyone who can benefit  from it.", 
            color: "colorDiv2",
            buttonLink: "aah"
        },
        {
            title: "CHAMPLAIN VALLEY SUSTAINABLE AGRICULTURE NETWORK",
            image: "/champlainvalleyagriculture_logo.jpg",
            overview: "The Champlain Valley Sustainable Agriculture Network is a non-profit  organization that promotes sustainable farming practices and local food  systems in the Burlington area. We believe that a resilient and  equitable food system is essential for the health and well-being of our  community, our economy, and our environment.", 
            color: "colorDiv1",
            buttonLink: "aai"
        },
        {
            title: "WINOOSKI RIVER WILDLIFE FOUNDATION",
            image: "/winooskiriverwildlife_logo.jpg",
            overview: "The Champlain Valley Sustainable Agriculture Network is a non-profit  organization that promotes sustainable farming practices and local food  systems in the Burlington area. We believe that a resilient and  equitable food system is essential for the health and well-being of our  community, our economy, and our environment.", 
            color: "colorDiv2",
            buttonLink: "aaj"
        }
    ];
    
    return (
    <div>
        <img src= "\sample-banner-9.png" alt="Temporary Banner" />
        <h1>Opportunities</h1>
        <h3 align="left">The Top Charities in Your Area</h3>
        {charities.map((charity) => (
            <Card   title={charity.title} 
                    image={charity.image} 
                    overview={charity.overview}  
                    color={charity.color} 
                    buttonLink={"/charity/" + charity.buttonLink}
                    buttonText="Learn More">
            </Card>              
        ))}
        <br></br><br></br>
    </div>
    )
}