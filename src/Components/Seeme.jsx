import React from 'react'
import './Seeme.css';
import GenFooter from './GenFooter'

import profileimage from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-05-29 at 02.21.08.jpeg"
import displayImage from "../assets/Untitled design (37).png";
import vector from "../assets/Javiera mages/Javiera Prospect Profiles/Vector 1.png"
import longimage from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-03-20 at 01.49.27.jpeg"
import image2 from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-05-29 at 02.21.06.jpeg"
import image3 from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-03-20 at 02.04.47.jpeg"
import image4 from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-05-29 at 02.21.05 (2).jpeg"
import image5 from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-05-29 at 02.21.04.jpeg"
import image6 from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-03-20 at 01.43.17.jpeg"
import image7 from "../assets/Javiera mages/Javiera Prospect Profiles/image7.png"
import image8 from "../assets/Javiera mages/Javiera Prospect Profiles/image8.png"

const Seeme = () => {
  const images = [
    longimage,
    displayImage,
    image2,
    image4,
    profileimage,
    image7,
    // image3,
    image5,
    image8,
    image6,
    longimage,
  ];

  return (
    <div className="welcome-gallery">

      <div className="titleandline">
    <h2 className="gallery-title">WELCOME TO MY WORLD</h2>
      <img className='decor-line' src={vector} alt="" />
      </div>
  
      

      <div className="gallery-grid">
        {images.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item} alt={`Gallery ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};



export default Seeme