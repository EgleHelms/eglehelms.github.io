import React from "react";
import {Link} from "react-router-dom";
import "../scss/App.scss";

const ProjectList = (props) => {

  const getPostlist = () => {
    let listItems = props.projArr.map((el, i) => 

    <li className="projItem" key={i}>
      <div className="innerItem">
        <Link to={`/singleproject/${i}`}>
          <img src="https://source.unsplash.com/random/400x300"></img>
        </Link>
        <Link to={`/singleproject/${i}`} style={{ textDecoration: 'none' }}>
          <h3>{el.title}</h3>
        </Link>
        <h6>{el.tech}</h6>
        <p>{el.description}</p>
        <div className="demo-links">
          <span><a href={el.demo}>DEMO</a></span> <span>| </span>
          <span><a href={el.demo}>CODE</a></span> 
        </div>
      </div>
    </li>)
    return listItems
  }

  return (
    <div>
      <ul className="projContainer">{getPostlist()}</ul>
    </div>
  )
}

export default ProjectList;