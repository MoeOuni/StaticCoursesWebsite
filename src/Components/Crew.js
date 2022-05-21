import React from "react";
import MaleImg from "../Assets/MaleAvatar.png";
import MaleGlassImg from "../Assets/MalaAvatarGlasses.jpg";
import FemaleImg from "../Assets/FemaleAvatar.jpg";
import UserCard from "./UserCard";

const Crew = () => {
  return (
    <div>
      <h1
        className='title text-center mt-3'
        style={{ fontWeight: "600", letterSpacing: "2px" }}
      >
        Meet the crew
      </h1>
      <div className='container text-center'>
        <div className='row mt-3'>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div>
              <UserCard
                Name={"Alex"}
                image={MaleImg}
                bio={"A web Developer with more than 5 years experience"}
              />
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div>
              <UserCard
                Name={"Amal"}
                image={FemaleImg}
                bio={
                  "A cyber security Engineer with more than 7 years experience"
                }
              />
            </div>
          </div>
          <div className='col-lg-4 col-md-4 col-sm-12'>
            <div>
              <UserCard
                Name={"Amir"}
                image={MaleGlassImg}
                bio={"A UI/UX Designer"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crew;
