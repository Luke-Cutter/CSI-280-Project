import Card from '/src/components/Card.jsx';

export default function Opportunities() {
    const charities = [
        {
            title: "Alzheimer’s Association of Burlington",
            image: "/profile-image-1.png",
            overview: "The Alzheimer's Association of Burlington offers vital resources and  support to individuals and families navigating the complexities of  Alzheimer's disease and other forms of dementia in the Burlington area,  fostering a compassionate community of care and advocacy.",
            color: "colorDiv1",
            buttonLink: "/"
        },
        {
            title: "Aunt Dot's Place",
            image: "/profile-image-3.png",
            overview: "Aunt Dot's Place serves as a beacon of hope for individuals facing  homelessness in Burlington, providing shelter, resources, and support to  help them rebuild their lives and find stability.",
            color: "colorDiv2",
            buttonLink: "/"
        },
        {
            title: "Burlington Dismas House",
            image: "/profile-image-2.png",
            overview: "Burlington Dismas House offers a transformative approach to criminal  justice by providing housing, support, and opportunities for individuals  transitioning from incarceration to the community, fostering a sense of  belonging and empowerment.",
            color: "colorDiv1",
            buttonLink: "/"
        },
        {
            title: "The Parks Foundation of Burlington",
            image: "/profile-image-4.png",
            overview: "The Parks Foundation of Burlington is dedicated to enhancing the city's  parks and green spaces, working collaboratively with the community to  preserve natural beauty, promote recreation, and cultivate vibrant  outdoor spaces for all to enjoy.",
            color: "colorDiv2",
            buttonLink: "/"
        },
        {
            title: "Feeding Chittenden",
            image: "/profile-image-5.png",
            overview: "Feeding Chittenden is a lifeline for individuals and families  experiencing food insecurity in Burlington, offering nutritious meals,  pantry services, and community programs to ensure no one goes hungry in  our community.",
            color: "colorDiv1",
            buttonLink: "/"
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
                    buttonLink="/charity/aab" 
                    buttonText="Learn More">
            </Card>              
        ))}
        <br></br><br></br>
    </div>
    )
}