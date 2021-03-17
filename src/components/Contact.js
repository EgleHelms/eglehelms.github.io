import React from "react";
import "../scss/App.css";

const Contact = () => {
  return (
<div className="contact-form">
    <div className="form-container">
        <form action="mailto:egle.helms@gmail.com" method="POST"  encType="text/plain" name="EmailForm">
          <label> Name: </label>
          <input type="text" name="name" />
          <label> Message: </label>
          <textarea name="message" rows="6" cols="20"  />
         <input type="submit" value="Submit" />
        </form>
    </div>
</div>
  )
}

export default Contact;
