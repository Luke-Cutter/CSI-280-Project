import { Link } from "react-router-dom";
import './WebsiteFooter.css';

const footerPages = [
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
}