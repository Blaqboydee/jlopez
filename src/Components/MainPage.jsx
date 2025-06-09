import React from "react";
import displayImage from "../assets/Untitled design (37).png";
import { Link } from "react-router-dom";
import "./MainPage.css";

const MainPage = () => {
  return (
    <>
   
      <div className="wholemain">
          <div className="topdiv">
              <h1>JAVIERA LOPEZ</h1>
        </div>
        <div className="imagediv">
       <img src={displayImage} alt="" />
        </div>

        <div className="box-and-line">
              <div className="midline"></div>
                <div className="name-box">
          <div className="smallbox">
            <h2>JAVIERA LOPEZ</h2>
            <p>VIP</p>

            <div className="characters">
              <span>SEXY</span>
              <span className="magic">MAGICAL</span>
              <span>BRUNETTE</span>
            </div>
          </div>
        </div>
        </div>

      

        <div className="content">
          <span>WARNING: THIS SITE CONTAINS ADULT MATERIAL!</span>
          <p>
            This website contains content intended for adults only. If you are
            under the age of 18, or if viewing such material is prohibited in
            your location, please exit the site immediately. By proceeding, you
            acknowledge that you are voluntarily choosing to access this content
            and that you are solely responsible for your actions.
          </p>
          <p>
            You agree to release both the creator of this website and me from
            any liability that may arise from your use of the site. We do not
            initiate or send any content to you, you are accessing it by your
            own choice. These pages are strictly not intended for minors, and we
            fully support the use of parental controls to prevent inappropriate
            access.
          </p>
          <p>
            No illegal activity is implied, encouraged, or condoned by the
            content herein. Neither I nor the creator of this site consent to or
            have knowledge of any unlawful conduct by visitors. This site does
            not promote or participate in prostitution. Any fees exchanged are
            for time and companionship only. Anything that occurs beyond that is
            a matter of personal choice between consenting adults and is not
            contracted for, implied, or endorsed by this website or its creator.
          </p>

          <div className="actions">
           <Link to={'/dashboard'} className="enter"><div className="enterDiv">ENTER</div></Link>   
           <Link className="exit"> <div className="exitDiv">EXIT</div></Link>
          </div>

          <footer>
            © 2025 JAVIERA LOPEZ. ALL RIGHTS RESERVED
          </footer>
        </div>
      </div>
    </>
  );
};

export default MainPage;
