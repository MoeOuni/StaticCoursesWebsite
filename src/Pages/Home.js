import React from "react";
import Navbar from "../Components/Navbar";
import Img from "../Assets/Course app-amico.svg";
import PrimaryBtn from "../Components/PrimaryBtn";
import OpeningText from "../Components/OpeningText";
import Crew from "../Components/Crew";
import OfferOfTheDay from "../Components/OfferOfTheDay";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const NavigateTo = useNavigate();
  const Browse = () => {
    NavigateTo("/courses");
  };
  return (
    <div>
      {/* Landing Page */}
      <div className='background'>
        <Navbar />
        <div className='container pt-lg-5'>
          <div className='row mt-4'>
            <div className='col-lg-7 col-md-12 mt-5 col-sm-12 order-lg-first order-md-first order-sm-last'>
              <OpeningText />
              <br />
              <PrimaryBtn Context={"Browse now"} Fn={Browse} />
            </div>
            <div className='col-lg-5 col-md-12 col-sm-12 order-first'>
              <img src={Img} alt='Landing' />
            </div>
          </div>
        </div>
      </div>
      {/* Meet The Crew Section */}
      <div className='background_light pt-2 pb-2'>
        <Crew />
      </div>
      {/* About Section */}
      <div className='background_gradient'>
        <div className='container'>
          <OfferOfTheDay />
        </div>
      </div>
    </div>
  );
};

export default Home;
