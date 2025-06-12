import React from 'react';
import deposit from "../assets/Javiera mages/Javiera Prospect Profiles/Group 35968.png"
import cancellations from "../assets/Javiera mages/Javiera Prospect Profiles/_3133124283792.png"
import styles from '../assets/Styles/Timetogether.module.css';

import image2 from "../assets/Javiera mages/Javiera Prospect Profiles/WhatsApp Image 2025-05-29 at 02.21.06.jpeg"
import image7 from "../assets/Javiera mages/Javiera Prospect Profiles/image7.png"
import displayImage from "../assets/Javiera mages/Javiera Prospect Profiles/Untitled design (37).png";

const Section = () => (
<div className={styles.body}>
  <div class={styles.onlinecard}>
    <div className={styles.onlinecardheader}>
      <span className={styles.dot}></span>
      <span className={styles.title}>ONLINE</span>
    </div>
    <div className={styles.onlinecardcontent}>
      <span className={styles.service}>Video Show 15 minutes</span>
      <span className={styles.description}>I’ll dance to you! I’ll show you my beautiful body</span>
      <span className={styles.onlineprice}>US$150</span>
    </div>
  </div>
</div>

);


const PolicySection = () => (
  <div className={styles.policies}>
    <h2 className={styles.policyTitle}>POLICIES</h2>
    <div className={styles.policyGrid}>
      <div className={styles.policyBlock}>
        <div className={styles.policytype}>
        <img src={deposit} alt="" />
         <h3>DEPOSITS</h3>
        </div>
       
        <div className={styles.info}>
        <p>Deposit is required $100.00</p>
        <p>More Screening process is mandatory</p>
        </div>
        
        <div className={styles.info}>
        <p>After process</p>
        <p>If you want FaceTime no problem</p>
        </div>

      </div>
      <div className={styles.policyBlock}>

        <div className={styles.policytype}>
        <img src={cancellations} alt="" />
         <h3>CANCELLATIONS</h3>
        </div>
        
        <div className={styles.info}>
        <p>Make sure before</p>
        <p>If you're 100% sure! You are very welcome!</p>
        </div>

        <div className={styles.info}>
        <p>Our time is the most valuable thing</p>

        <p>Make sure you mean it & don't play like a child</p>
        {/* <p>Our time is the most valuable thing</p> */}

        {/* <p>Make sure you mean it & don't play like a child</p> */}
        </div>

      </div>
    </div>
  </div>
);



const Call = ({ title, services, position}) => (
   <div className={styles.divstyle} style={{backgroundImage: position? `url(${image7})`:`url(${image2})`}}>
    <h2 className={styles.titlestyle}>{title}</h2>
    {services.map(({label, price, note})=>(
         <div className={styles.callstyle}>
         <div className={styles.eachcontent}>
          <h3 className={styles.label}>{label}</h3>
          <p className={styles.note}>{note}</p>
         </div>
         <span className={styles.price}>{price}</span>
         </div>
       
    ))}</div>
   
);

const Touring = ({ title, services}) => (
   <div className={styles.tourdivstyle}>
    <h2 className={styles.titlestyle}>{title}</h2>
    {services.map(({label, price, note})=>(
         <div className={styles.tourcallstyle}>
         <div className={styles.toureachcontent}>
          <h3 className={styles.tourlabel}>{label}</h3>
          <p className={styles.tournote}>{note}</p>
         </div>
         <div className={styles.price}>{price}</div>
         </div>
       
    ))}</div>
   
);

const Timetogether = () => {
  return (
    <div className={styles.container}>
      <Section/>


     <div className={styles.calls}>
  <Call
        title="INCALL"
        services={[
          { label: '1hr VIP Service', price: 'US$700', note: 'Deposit is required' },
          { label: '90 min VIP service GFE', price: 'US$1,000', note: 'My favorite (booked in advance)' },
          { label: '6 hrs GFE', price: 'US$3,500', note: 'The best option luv (Promotion!)' },
          { label: 'Overnight (party together)', price: 'US$5,000', note: 'Deposit is very important' },
        ]}
      />

      <Call
        position
        title="OUTCALL"
        services={[
          { label: '90 min VIP service Daty, Msog', price: 'US$1,000', note: '+ plus Uber'  },
          { label: '2 hrs dinner + VIP service', price: 'US$1,400', note: 'Screening, more deposit is required' },
          { label: 'Hr VIP service Msog, Daty', price: 'US$700', note: 'Screening, Deposit, plus my Uber please' },
          { label: '1hr GFE', price: 'US$800', note: 'Unrushed service' },
        ]}
      />
     </div>
      
  
      <Touring
        title="TOURING"
        services={[
          { label: 'Erotic massage (only massage)', price: 'US$500', note: "I don't take table mission or bs, but I'll do the best" },
          { label: 'Introduce myself VIP Service', price: 'US$700', note: 'Screening process is required' },
          { label: '90 min GFE', price: 'US$1,000', note: 'Screening process is required' },
          { label: 'Dinner and guess who’s dessert', price: 'US$1,100', note: '2hrs, Make the reservation in advance' },
        ]}
      />

      <PolicySection />
    </div>
  );
};

export default Timetogether;