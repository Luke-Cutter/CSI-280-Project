import { Link } from "react-router-dom";
import './WebsiteFooter.css';

/*const footerPages = [
    {id: 1, title: 'Careers', pageLink: '/careers'},
    {id: 2, title: 'Legal Information', pageLink: '/legal'},
    {id: 3, title: 'Email Us', pageLink: '/email-us'},
    {id: 4, title: 'Suggestions', pageLink: '/suggestions'},
    {id: 5, title: 'Our Mission Statement', pageLink: '/mission-statement'},
  ];

export default function WebsiteFooter() {
    return (
        <div>
            <br></br><br></br>
            {footerPages.map((page) => (
                <Link className="footerHover" to={page.pageLink}> | {page.title} | </Link>
            ))}
        </div>
    )
}*/

const Footer = () => {
    return(
        <footer className="footer">
            <div className="left">
                <table className="links">
                    <tr>
                        <td><a href="#">Charity Sign Up</a></td>
                        <td><a href="/email-us">Email Us</a></td>
                    </tr>
                    <tr>
                        <td><a href="#">Change Charity Details</a></td>
                        <td><a href="/suggestions">Suggestions</a></td>
                    </tr>
                    <tr>
                        <td><a href="/carrers">Carrers</a></td>
                        <td><a href="/mission-statement">Our Mission Statement</a></td>
                    </tr>
                    <tr>
                        <td><a href="/legal">Legal Information</a></td>
                    </tr>
                </table>
            </div>
            <div className="right">
                <table className="socials">
                    <th colSpan='4'>Follow Us On Social Media!</th>
                    <tr>
                        <td><a href="facebook.com"><img src="facebook.png"></img></a></td>
                        <td><a href="youtube.com"><img src="youtube.jpg"></img></a></td>
                        <td><a href="instagram.com"><img src="instagram.png"></img></a></td>
                        <td><a href="reddit.com"><img src="reddit.png"></img></a></td>
                    </tr>
                    <tr>
                        <td><a href="linkedin.com"><img src="linkedin.png"></img></a></td>
                        <td><a href="twitter.com"><img src="twitter.jpg"></img></a></td>
                        <td><a href="pintrest.com"><img src="pintrest.png"></img></a></td>
                        <td><a href="discord.com"><img src="discord.jpg"></img></a></td>
                    </tr>
                </table>
            </div>
        </footer>
    )
}

export default Footer;