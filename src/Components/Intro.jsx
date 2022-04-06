import React from 'react'
import "../styles/intro.css";
import {useState} from 'react';
import Bewerbungsfoto from '../images/Bewerbungsfoto.jpg';
import Bewerbungsfoto2 from '../images/Bewerbungsfoto2.jpg';

export default function Intro() {
const imagePath= [Bewerbungsfoto, Bewerbungsfoto2]
const [imageCounter, setImageCounter] = useState(0);
const toggleImage = () => {
    if (imageCounter<(imagePath.length-1)){
       setImageCounter(() => imageCounter+1)
   } else {
      setImageCounter(0)
  }
}
    return (
        <section id="intro" className="s-intro target-section">

        <div className="row intro-content">

            <div className="column large-9 mob-full intro-text">
                <h3>Hello, I`m Rainer Bahls</h3>
                <h1>
                    Digital Designer <br />
                    and Web Developer <br />
                    Based In Somewhere.
                </h1>
            </div>
            
            
            <div className="intro-scroll">
                <a href="#about" className="intro-scroll-link smoothscroll">
                    Scroll For More
                </a>
            </div>

            <div className="intro-grid"></div>
            <div className="intro-pic" style={{backgroundImage: `url(${imagePath[imageCounter]})`, cursor: "pointer"}} onClick={toggleImage}alt="Portraitfoto" />
            {/* <div className="intro-pic"><img src={imagePath[imageCounter]} onClick={toggleImage} /></div> */}
            {/* <div className="intro-pic" index={0}><img style={{maxWidth:"50px"}}src={Bewerbungsfoto} onClick={toggleImage}alt="business"></img> </div> */}
            {/* <div className="intro-pic" index={1}><img style={{maxWidth:"50px"}}src={Bewerbungsfoto2} onClick={toggleImage}alt="private"></img> </div>  */}
        </div>
    </section>
    )
}
