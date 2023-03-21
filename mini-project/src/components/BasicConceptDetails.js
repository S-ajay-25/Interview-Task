import React from "react";
import './BasicConceptDetails.css'
import { NavLink } from "react-router-dom";

const BasicConceptsDetails = (props) => {
  return (
    <div className="project-card">
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btn">
          <NavLink to={props.view} className="btn">
            View
          </NavLink>
          <NavLink to={props.source} className="btn">
            Source
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default BasicConceptsDetails;
