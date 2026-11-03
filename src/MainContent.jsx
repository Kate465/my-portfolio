import React from "react";
import photo from "./assets/photo.jpeg";
import travelIMG from "./assets/travelIMG.png";
import weatherappIMG from "./assets/weatherappIMG.png";
import worldclockIMG from "./assets/worldclockIMG.png";

export default function MainContent(){
    return(
        <div className="MainContent">
            <h2>About Me</h2>
            <img src={photo} className="Profile-photo" alt="photo"   />
            <p>
                I am a Junior Front End Developer and have completed my learning with SheCodes academy. 
                In my learning journey, I have attained certfications in website development(HTML, CSS, Javascript), 
                use of artficial intellingence, responsive wed development and specialises in React.
            </p>
            <h2>Projects</h2>
            <p> The following are some projects that I have worked on.</p>

<img src={travelIMG} className="Travel-picture" alt="travel picture" />
<p>This was bulit with HTML, CSS, javascript and responsive tools</p>

<img src= {weatherappIMG} className="WeatherApp-picture" alt ="weatherapp picture"/>
<p>This was built with API intergration, axios, and react </p>

<img src={worldclockIMG} className="Worldclock-picture" alt="worldclock picture" />
<p>This was built with use of API, react, axios</p>
        </div>
    );
}