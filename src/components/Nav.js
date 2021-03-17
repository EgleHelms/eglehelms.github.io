import {Link} from "react-router-dom";
import "../scss/App.scss"
import SocialLinks from "./SocialLinks";


function Nav(props) {
  return (
    <nav>
      <ul className="nav-links">
        <Link to="/" ><li>Home</li></Link>
        <Link to="/projects" ><li>Projects</li></Link>
        <Link to="/contact" ><li>Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Nav;
