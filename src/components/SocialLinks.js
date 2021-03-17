import React from "react";
//import {FontAwesomeIcon} from "react-fontawesome";
import "../scss/App.css";

const SocialLinks = (props) => {
  return (
    <div>
      <ul className="social-links">
      {props.socials.map((el, i) => 
        <li key={i}>
          <span> <a href={el.link}>{el.icon}</a></span>
        </li>
      )} 
      </ul>
    </div>
  )
}

export default SocialLinks;