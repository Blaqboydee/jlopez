import React from "react";
import "../assets/Styles/SurpriseMe.css";
import guccibra from "../assets/Javiera mages/Javiera Prospect Profiles/gucci bra white.webp";
import gucciembroidered from "../assets/Javiera mages/Javiera Prospect Profiles/embroidered.avif";
import guccilingerie from "../assets/Javiera mages/Javiera Prospect Profiles/gucci lingerie set.jpg";
import guccilove from "../assets/Javiera mages/Javiera Prospect Profiles/guccilovep.jpeg";
import guccitulle from "../assets/Javiera mages/Javiera Prospect Profiles/gucci tulle lingerie.jpg";

import landdweller from "../assets/Javiera mages/Javiera Prospect Profiles/rolex land dweller.jpg";
import skydweller from "../assets/Javiera mages/Javiera Prospect Profiles/rolex sky-dweller.jpg";
import airpods from "../assets/Javiera mages/Javiera Prospect Profiles/apple airpods 4 wireless.jpg";
import iphone16 from "../assets/Javiera mages/Javiera Prospect Profiles/iphnoe 16 promax.jpg";

import sauvage from "../assets/Javiera mages/Javiera Prospect Profiles/sauvage.jpg";
import Fessence from "../assets/Javiera mages/Javiera Prospect Profiles/French Essence.jpg";
import venice from "../assets/Javiera mages/Javiera Prospect Profiles/venice (2).jpg";
import imperial from "../assets/Javiera mages/Javiera Prospect Profiles/Imperial Perfume.jpg";
import jstrok from "../assets/Javiera mages/Javiera Prospect Profiles/jewell strok.jpg";
import js from "@eslint/js";

const items = {
  lingerie: [
    { title: "GUCCI Love Parade", img: guccilove },
    { title: "Gucci lingerie set", img: guccilingerie },
    { title: "Gucci BLACK Lace bra", img: guccibra, isCenter: true },
    { title: "GUCCI Tulle Lingerie", img: guccitulle },
    { title: "GUCCI Embroidered", img: gucciembroidered },
  ],
  tech: [
    { title: "Rolex Land-Dweller", img: landdweller },
    { title: "Rolex 2", img: skydweller },
    { title: "Apple AirPods 4 Wireless", img: airpods },
    { title: "iPhone 16 Pro Max", img: iphone16 },
  ],
  perfume: [
    { title: "Sauvage", img: sauvage },
    { title: "French Essence", img: Fessence, shouldFlow: true  },
    { title: "Venice", img: venice },
    { title: "Imperial Perfume", img: imperial, shouldFlow: true  },
    { title: "Jewell Strok", img: jstrok },
  ],
};

const Surpriseme = () => {
  return (
    <div className="surprise-me">
      <h1>Surprise Me</h1>
      <p className="subtitle">Things I Would Absolutely Love to Have</p>
      <p className="description">
        While your presence is more than enough, a little surprise never goes
        unnoticed! For those who enjoy gifting and going the extra mile, I have
        put together a curated wishlist of things that would absolutely make my
        day. Your thoughtfulness means the world to me, and trust me, gratitude
        won’t end with just a “thank you”.
      </p>

      <section className="wishlist-section">
        <div className="wishlist-row">
          {items.lingerie.map((item, idx) => (
            <div
              key={idx}
              className={`wishlist-item ${item.isCenter ? "center-highlight" : ""}`}
            >
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="wishlist-tech">
          {items.tech.map((item, idx) => (
            <div key={idx} className="wishlist-tech-item">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        <div className="wishlist-row">
          {items.perfume.map((item, idx) => (
            <div key={idx} className={item.shouldFlow ? "wishlist-item flowingPerf" : "wishlist-item perf" } >
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Surpriseme;
