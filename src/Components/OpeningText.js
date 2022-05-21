import React from "react";

const OpeningText = () => {
  return (
    <div>
      <h1 className='title' style={{ fontWeight: "500", letterSpacing: "1px" }}>
        Welcome to Courety
      </h1>
      <br />
      <h2 style={{ fontWeight: "400" }}>A broad selection of courses</h2>

      <h5
        style={{
          fontWeight: "400",
          letterSpacing: "1px",
        }}
      >
        Get unlimited access to Courety’s top courses for your team. Learn and
        improve skills across business, tech, design, and more.
      </h5>
      <br />
      <h2 style={{ fontWeight: "400" }}>
        Transform your life through education
      </h2>
      <h5
        style={{
          fontWeight: "400",
          letterSpacing: "1px",
        }}
      >
        Learners around the world are launching new careers, advancing in their
        fields, and enriching their lives.
      </h5>
    </div>
  );
};

export default OpeningText;
