import React from "react";
import "../Gallary.css";

const Gallary = ({ photos }) => {
  return (
    <div id="/our-gallary" className="image-container-div">
      <center>
        <h1
          style={{
            color: "#000",
            fontWeight: "bold",
            paddingBottom: "50px",
            fontSize: "28px",
          }}
        >
          OUR GALLARY
        </h1>
      </center>
      <div className="image-container">
        {photos.map((photo, index) => (
          <div className="image">
            <a target="_blank" href={photo.image} key={index}>
              <img src={photo.image} alt={photo.alt} />
              <img src={photo.image} alt={photo.alt} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallary;
