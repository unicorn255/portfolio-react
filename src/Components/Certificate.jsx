import React from "react";
import "../styles/certificate.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import certificateA from "../images/img028.jpg";
import certificateB from "../images/img029.jpg";
import certificateC from "../images/img030.jpg";
import certificateD from "../images/img031.jpg";
import certificateE from "../images/img032.jpg";
import certificateF from "../images/img033.jpg";
import certificateG from "../images/img034.jpg";
export default function Certificate() {
  return (
    <section
      id="certificate"
      className="s-about target-section"
      style={{
        marginTop: "5vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3 style={{ marginBottom: "40px" }}>Meine Zertifikate</h3>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={7}
        style={{
          width: "76vw",
          height: "144vh",
          display: "flex",
          flexDirection: "column",
          justifyContent:"space-between",
          overflowY: 'scroll',
        }}
      >
        <Slider>
          <Slide index={0}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content",   }}
              src={certificateA}
              alt="certificate SAP"
            />
          </Slide>
          <Slide index={1}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content"  }}
              src={certificateB}
              alt="certificate Mat"
            />
          </Slide>
          <Slide index={2}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content"  }}
              src={certificateC}
              alt="certificate Zeugnis"
            />
          </Slide>
          <Slide index={3}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content" }}
              src={certificateD}
              alt="certificate EWE"
            />
          </Slide>
          <Slide index={4}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content" }}
              src={certificateE}
              alt="certificate CAA"
            />
          </Slide>
          <Slide index={5}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content" }}
              src={certificateF}
              alt="certificate Eng APP 1.2"
            />
          </Slide>
          <Slide index={6}>
            <img className="certificateImg"
              style={{ height: "100%", width: "fit-content" }}
              src={certificateG}
              alt="certificate Eng APP 2.1"
            />
          </Slide>
        </Slider>
        <div
          className="sliderButton"
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginTop: "10 px",
          }}
        >
          <ButtonBack>zurück</ButtonBack>
          <ButtonNext>vor</ButtonNext>
        </div>
      </CarouselProvider>
    </section>
  );
}
