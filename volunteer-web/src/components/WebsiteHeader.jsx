import vhLogo from '/vhlogofinal.svg'
import { Link } from "react-router-dom";

export default function WebsiteHeader() {
    return (
        <div>
        <Link to="/">
          <img src={vhLogo} className="logo" alt="Vite logo" />
        </Link>
        <span>Website Header</span>
        </div>
    )
}