import React from "react";
import Mind from "../Assets/Mental health-amico.svg";
import LogoHTML from "../Assets/pngegg.png";
import LogoPhp from "../Assets/php_cover.jpg";
import PrimaryBtn from "./PrimaryBtn";
import { useNavigate } from "react-router-dom";
const OfferOfTheDay = () => {
  const Navigate = useNavigate();
  const NavToRegister = () => {
    Navigate("/register");
  };
  return (
    <div className='row d-flex justify-content-between'>
      <div className='col-lg-6 col-md-6 col-sm-12 text-center mt-3'>
        <h1
          className='title'
          style={{ fontWeight: "500", letterSpacing: "2px" }}
        >
          Let's start with Basic courses
        </h1>
        <img src={Mind} alt='build Mind' />
        <h4
          className='text-start'
          style={{ fontWeight: "400", letterSpacing: "1px", marginTop: "10px" }}
        >
          Start with the web development it's highly needed in the market now
          plus it's easy for new student to adjust with it, for you we prepared
          a pack with perfect discount don't miss it and start building your
          carrier now!
        </h4>
      </div>
      <div className='col-lg-5 col-md-5 col-sm-12'>
        <div className='mt-3 d-flex flex-column justify-content-center'>
          <div className=''>
            <div className='card mb-3'>
              <div className='text-center bp_gradient_bg'>
                <img src={LogoHTML} className='card-img-top' alt='...' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Web Development essentials</h5>
                <p className='card-text'>
                  This is a pack that contains the essentials of web
                  development, you will learn Basic HTML, Basic CSS and
                  JavaScript(JS), and in the final lesson you will create a full
                  static website with this technologies
                </p>
                <div className='container d-flex justify-content-between'>
                  <PrimaryBtn Context={"Start now"} Fn={NavToRegister} />
                  <h6 style={{ marginTop: "13px" }} className='title'>
                    50% discount
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <div className='card mb-3'>
              <div className='text-center'>
                <img src={LogoPhp} className='card-img-top' alt='...' />
              </div>
              <div className='card-body'>
                <h5 className='card-title'>Backend development</h5>
                <p className='card-text'>
                  Backend development focuses on the functionality of the
                  website unlike the frontend where it focus on the design and
                  the layout it's crucial to know the basics of it, you will
                  learn it using the PHP programing language.
                </p>
                <p className='card-text'>
                  <div className='container d-flex justify-content-between'>
                    <PrimaryBtn Context={"Start now"} Fn={NavToRegister} />
                    <h6 style={{ marginTop: "13px" }} className='title'>
                      50% discount
                    </h6>
                  </div>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferOfTheDay;
