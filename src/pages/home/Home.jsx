import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../../assets/scss/home.scss";
import { Box } from "@chakra-ui/layout";
import "../../assets/images/ive two.mp4";

const Home = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".videoscale", {
      scale: 1.4, // or your desired scale value
      duration: 2,
      ease: "power1.in",
    }).to(
      ".videoscale",
      {
        scale: 1,
        duration: 0.5,
        onComplete: () => {
          gsap.to(".logo-typo", {
            opacity: 0,
            duration: 0.5,
          });
        },
      },
      0
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty array to run the effect only once
  return (
    <Box>
      {/* <div className="brand-animation loading">
        <div className="brand-animation__container">
          <div className="brand-animation__slide brand-animation__slide--logo">
            <div className="container-xxl" ref={logoRef}>
              <div className="logo-typo logo-typo--white"></div>
            </div>
          </div>
          <div className="brand-animation__slide brand-animation__slide--background">
            <div className="brand-animation__slide--background-video">
              <iframe
                width="1250"
                height="703"
                src="https://www.youtube.com/embed/10QTMTRNM0I"
                title="IVE(아이브) - Off The Record @인기가요 inkigayo 20231015"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div> */}

      <div className="main-video">
        <div className="logo-scale">
          <div className="logo-typo logo-typo--white"></div>
        </div>
        <div className="videoscale">
          <iframe
            width="1250"
            height="703"
            src="https://www.youtube.com/embed/10QTMTRNM0I"
            title="IVE(아이브) - Off The Record @인기가요 inkigayo 20231015"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Box>
  );
};

export default Home;
