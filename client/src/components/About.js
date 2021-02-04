import React from "react";

function AboutUs() {
  fetch("http:localhost:9000/testApi")
    .then((res) => res.text())
    .then((res) => {
      console.log(res);
    });
  return <h1>About Us</h1>;
}

export default AboutUs;
