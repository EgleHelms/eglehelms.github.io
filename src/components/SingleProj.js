import React from "react";
import "../scss/App.scss";
import { socials, projectsArr} from "../data/data"

const SingleProj = (props) => {

  const el = projectsArr[props.match.params.i]

  return (
    <div>
      <h2>{el.title}</h2>
      <div className="screenshots">
        <img src="https://source.unsplash.com/random/400x300"></img>
        <img src="https://source.unsplash.com/random/400x300"></img>
      </div>
      <img></img>
      <p>{el.tech}</p>
      <p>{el.description}</p>

    </div>
  )
}

export default SingleProj;