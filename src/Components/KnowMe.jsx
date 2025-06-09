import React from "react";
import "./KnowMe.css";
import GenFooter from "./GenFooter";
import profileimage from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-05-29 at 02.21.08.jpeg"

const KnowMe = () => {
  return (
    <div>
      <div class="thecontainer">

        <div className="picDiv">
        <div class="profile-photo">
          <img src={profileimage} alt="Profile Photo" />
        </div>
        </div>
       
        <div class="sidecontent">
          <h1>WELCOME TO HEAVEN!</h1>
          <h2>Javiera Lopez</h2>
          <div class="tag">Sexy, Magical, Brunette</div>
          <p>
            I am a genuine lady you would love my personality. I am looking new
            adventures. I love it meeting new people, especially if they are
            gentlemen. I love good manners.
          </p>
          <p class="highlight">
            About me: I take care of my skin, my body and my whole being with
            different daily routines. Check it out in person.
          </p>
          <p>
            I enjoy the pleasures of life such as travelling, going out dinner,
            read, dance… the life is a Balance.
          </p>
        </div>
      </div>

        <div class="info-section">
          <p class="based-in">BASED IN</p>
          <div class="locations">
            <span>Milwaukee, Wisconsin, United States</span>
            <span>|</span>
            <span>Chicago, Illinois, United States</span>
            <span>|</span>
            <span>Miami, Florida, United States</span>
          </div>

          <div class="info-box">
            <div class="info-item">
              <strong>GENDER</strong>
              <span>Woman (She/Her/Hers)</span>
            </div>
            <div class="info-item">
              <strong>AGE</strong>
              <span>30s</span>
            </div>
            <div class="info-item">
              <strong>ETHNICITY</strong>
              <span>Latina</span>
            </div>
            <div class="info-item">
              <strong>CATERS TO</strong>
              <span>Men</span>
            </div>
            <div class="info-item">
              <strong>LANGUAGES</strong>
              <span>English, Spanish</span>
            </div>
          </div>

          <div class="info-box">
            <div class="info-item">
              <strong>BODY TYPE</strong>
              <span>Curvy</span>
            </div>
            <div class="info-item">
              <strong>HEIGHT</strong>
              <span>158 / 5’2”</span>
            </div>
            <div class="info-item">
              <strong>EYE COLOUR</strong>
              <span>Brown</span>
            </div>
            <div class="info-item">
              <strong>HAIR COLOUR</strong>
              <span>BRUNETTE</span>
            </div>
            <div class="info-item">
              <strong>SHOE SIZE</strong>
              <span>35</span>
            </div>
            <div class="info-item">
              <strong>CUP SIZE</strong>
              <span>DD</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default KnowMe;
