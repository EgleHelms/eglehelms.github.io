import React from "react";
import SocialLinks from "./SocialLinks";
import "../scss/App.css";


const Footer = (props) => {
  return (
    <div className="footer">
      <SocialLinks socials={props.socials}/>
    </div>
  )
}

export default Footer;