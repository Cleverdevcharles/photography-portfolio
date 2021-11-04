import React from "react";
import "../Developer.css";

const Developer = ({
  developer_email,
  developer_name,
  developer_photo,
  developer_phone,
}) => {
  return (
    <div id="/our-gallary" className="devImage-container-div">
      <center>
        <h1
          style={{
            color: "#000",
            fontWeight: "bold",
            paddingBottom: "50px",
            fontSize: "28px",
          }}
        >
          OUR DEVELOPER
        </h1>
        <div className="dev-image-container">
          <div className="devImage">
            <a target="_blank" href={developer_photo}>
              <img
                src={developer_photo}
                style={{ borderRadius: "50%" }}
                className="devImg"
                alt="Developer's Photo"
              />
            </a>
            <center>
              <div className="devInfo" style={{ marginTop: "50px", width:"500px" }}>
                <h1 className="h1">{developer_name}</h1>
                <h3 className="h3">{developer_email}</h3>
                <h3 className="h3">{developer_phone}</h3>
              </div>
            </center>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Developer;
