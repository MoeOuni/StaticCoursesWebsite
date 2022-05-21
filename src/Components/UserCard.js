import React from "react";
import "./Card.css";

const UserCard = ({ Name, bio, image }) => {
  return (
    <div class='custom_card'>
      <div class='tools'>
        <div class='circle'>
          <span class='red box'></span>
        </div>
        <div class='circle'>
          <span class='yellow box'></span>
        </div>
        <div class='circle'>
          <span class='green box'></span>
        </div>
      </div>
      <div class='container d-flex flex-column text-center'>
        <div>
          <img
            src={image}
            style={{ width: "60%", borderRadius: "50%" }}
            alt='profile'
          />
          <hr />
        </div>
        <div>
          <h3>{Name}</h3>
          <h5>{bio}</h5>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
