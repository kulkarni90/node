import React from "react";

function IntroductionItem(props) {
  return (
    <div className="introduction-item is-success">
      <div className="introduction-marker is-image is-48x48">
        <img src={props.image} alt="" />
      </div>
      <div className="introduction-content">
        <h1 className="title is-6">Home Office: {props.homeoffice}</h1>
        <h1 className="title is-4">{props.firstname} {props.lastname}</h1>
        <h3 className="title is-5">{props.position} at level {props.level}</h3>
        <h3 className="title is-5">Graduate from {props.university}</h3>
      </div>
    </div>
  );
}

export default IntroductionItem
