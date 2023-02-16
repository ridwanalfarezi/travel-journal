import React from "react";

const Journal = (props) => {
  return (
    <div className="journal">
      <img src={props.imageUrl} className="journal-img" />
      <div className="cap">
        <div className="journal-loc">
          <img src="/img/loc.png" />
          <span>{props.location}</span>
          <a target="_blank" href={props.googleMapsUrl}>View on Google Maps</a>
        </div>
        <h2>{props.title}</h2>
        <span className="journal-date">{props.startDate} - {props.endDate}</span>
        <p className="journal-des">{props.description}</p>
      </div>
    </div>
  );
};

export default Journal;
