import React from "react";
import "../scss/App.css";
import SocialLinks from "./SocialLinks";

const Header = (props) => {
  return (
    <div className="main">
        <div className="banner">
          <h1>EGLE HELMS<br/></h1>
          <div className=""> <SocialLinks socials={props.socials}/></div>
        </div>
  </div>
  )
}

export default Header;
