import React, { useState } from 'react';
import './BookingForm.css';

const BookingForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1 - Personal Info
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    cityState: '',
    ageBracket: '',
    briefDescription: '',
    howDidYouFind: '',
    
    // Step 2 - Experience Details
    date: '',
    time: '',
    hour: '',
    minutes: '',
    ampm: 'AM',
    duration: '',
    meetingLocation: '',
    experienceType: '',
    addNuru: false,
    
    // Step 3 - References
    affiliation: '',
    referenceDetails: '',
    provider1Website: '',
    provider2Website: '',
    provider3Website: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Reservation submitted successfully!');
  };

  return (
    <div className="booking-container">
      <div className="booking-form">
        {/* Header */}
        <div className="header-section">
          <h1>BOOK YOUR EXPERIENCE</h1>
          <p className="disclaimer">
            Kindly avoid any mention or discussion of donations, services, or related terms (including coded language). Messages that do 
            not respect this guideline will be ignored and blocked, and any scheduled appointments may be canceled without notice.
          </p>
          
          <div className="intro-section">
            <h2>LET'S GET TO KNOW EACH OTHER</h2>
            <p>
              You are warmly invited to step away from the ordinary and indulge in something unforgettable. This is your 
              space to explore desires, embrace freedom, and experience genuine connection. If you're seeking a truly 
              unique encounter, one that lingers long after the moment, you're in exactly the right place. Discretion is both 
              offered and expected, ensuring your experience remains as private as it is memorable.
            </p>
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="progress-indicator">
          <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>1</div>
          <div className={`progress-line ${currentStep >= 2 ? 'active' : ''}`}></div>
          <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>2</div>
          <div className={`progress-line ${currentStep >= 3 ? 'active' : ''}`}></div>
          <div className={`progress-step ${currentStep >= 3 ? 'active' : ''}`}>3</div>
        </div>

        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="step-content">
            <h3>ABOUT YOU</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>First Name*</label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Last Name*</label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Phone No*</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email Address*</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>City & State*</label>
                <input
                  type="text"
                  value={formData.cityState}
                  onChange={(e) => handleInputChange('cityState', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Age Brackets*</label>
                <select
                  value={formData.ageBracket}
                  onChange={(e) => handleInputChange('ageBracket', e.target.value)}
                >
                  <option value="">Select Age Range</option>
                  <option value="18-25">18-25</option>
                  <option value="26-35">26-35</option>
                  <option value="36-45">36-45</option>
                  <option value="46-55">46-55</option>
                  <option value="56+">56+</option>
                </select>
              </div>
            </div>
            
            <div className="form-group full-width">
              <label>Brief Description*</label>
              <textarea
                value={formData.briefDescription}
                onChange={(e) => handleInputChange('briefDescription', e.target.value)}
                rows="4"
              />
            </div>

            <div className="form-group full-width">
              <label>How Did You Find Me?</label>
              <div className="checkbox-group">
                {['RS2K', 'Eros', 'P411', 'TER', 'Tryst', 'Other'].map(option => (
                  <label key={option} className="checkbox-label">
                    <input
                      type="radio"
                      name="howDidYouFind"
                      value={option}
                      checked={formData.howDidYouFind === option}
                      onChange={(e) => handleInputChange('howDidYouFind', e.target.value)}
                    />
                    {option}
                  </label>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Experience Details */}
        {currentStep === 2 && (
          <div className="step-content">
            <h3>OUR TIME TOGETHER</h3>
            <p className="subtitle">The What, When, Where & How</p>
            
            <div className="form-grid">
              <div className="form-group">
                <label>Select Date*</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => handleInputChange('date', e.target.value)}
                />
              </div>
              
              <div className="form-group">
                <label>Time*</label>
                <div className="time-inputs">
                  <select
                    value={formData.hour}
                    onChange={(e) => handleInputChange('hour', e.target.value)}
                  >
                    <option value="">Hour</option>
                    {Array.from({length: 12}, (_, i) => i + 1).map(hour => (
                      <option key={hour} value={hour}>{hour}</option>
                    ))}
                  </select>
                  <select
                    value={formData.minutes}
                    onChange={(e) => handleInputChange('minutes', e.target.value)}
                  >
                    <option value="">Minutes</option>
                    <option value="00">00</option>
                    <option value="15">15</option>
                    <option value="30">30</option>
                    <option value="45">45</option>
                  </select>
                  <select
                    value={formData.ampm}
                    onChange={(e) => handleInputChange('ampm', e.target.value)}
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Duration</label>
              <div className="checkbox-group">
                {['1 Hour', '1.5 Hours', '2 Hours', '3 Hours', '4 Hours'].map(duration => (
                  <label key={duration} className="checkbox-label">
                    <input
                      type="radio"
                      name="duration"
                      value={duration}
                      checked={formData.duration === duration}
                      onChange={(e) => handleInputChange('duration', e.target.value)}
                    />
                    {duration}
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label>Where Will We Meet?</label>
              <select
                value={formData.meetingLocation}
                onChange={(e) => handleInputChange('meetingLocation', e.target.value)}
              >
                <option value="">Please Choose</option>
                <option value="incall">Incall - Javiera Place</option>
                <option value="outcall">Outcall - Your Place (2hr min)</option>
                <option value="fly-me">Fly Me 2 You</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form-group">
              <label>Select Experience Type*</label>
              <select
                value={formData.experienceType}
                onChange={(e) => handleInputChange('experienceType', e.target.value)}
              >
                <option value="">Please Choose</option>
                <option value="gfe">GFE Experience</option>
                <option value="vip">VIP Session</option>
                <option value="overnight">Overnight</option>
                <option value="travel">Travel Companion</option>
              </select>
            </div>

            <div className="addon-section">
              <p>NEW! Add NURU Body Slide To Any GFE Or VIP Session.</p>
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  checked={formData.addNuru}
                  onChange={(e) => handleInputChange('addNuru', e.target.checked)}
                />
                Add Nuru (+$500)
              </label>
            </div>
          </div>
        )}

        {/* Step 3: References & Screening */}
        {currentStep === 3 && (
          <div className="step-content">
            <div className='topsec'>
         <h3>SCREENING PROCESS</h3>
            <p>If you're not a member of RS2K or P411, please submit 2-3 recent references from independent providers. Be sure to include each provider's name and website for verification.</p>
            
            <div className="important-section">
              <h4>IMPORTANT</h4>
              <p>References are required to move forward. Without proper verification, appointments will not be scheduled.</p>
              
              <h4>NOT ACCEPTED</h4>
              <p>FaceTime, LinkedIn profiles, or photos of ID are not valid forms of verification.</p>
            </div>
            </div>
       
            <div className="wholeFormgroup">
  <div className="form-group">
              <label className='areyou'>Are you affiliated with the following? Unfortunately, without any INDEPENDENT PROVIDER references I will not be able to see you.</label>
              <div className="areyougroup">
   <div className="checkbox-group ">
                <label className="checkbox-label ">
                  <input
                    type="radio"
                    name="affiliation"
                    value="preferred411"
                    checked={formData.affiliation === 'preferred411'}
                    onChange={(e) => handleInputChange('affiliation', e.target.value)}
                  />
                  Preferred411
                </label>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="affiliation"
                    value="rs2k"
                    checked={formData.affiliation === 'rs2k'}
                    onChange={(e) => handleInputChange('affiliation', e.target.value)}
                  />
                  RS2K
                </label>
                <label className="checkbox-label">
                  <input
                    type="radio"
                    name="affiliation"
                    value="provider-references"
                    checked={formData.affiliation === 'provider-references'}
                    onChange={(e) => handleInputChange('affiliation', e.target.value)}
                  />
                  Provider References (list below)
                </label>
              </div>
              </div>
           
            </div>
            
          

            <div className="form-grid">
              <div className="form-group">
                <label>Reference Details*</label>
                <textarea
                  placeholder="Option 1: VIP ID"
                  value={formData.referenceDetails}
                  onChange={(e) => handleInputChange('referenceDetails', e.target.value)}
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Provider 1</label>
                <input
                  type="url"
                  placeholder="Website"
                  value={formData.provider1Website}
                  onChange={(e) => handleInputChange('provider1Website', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Provider 2</label>
                <input
                  type="url"
                  placeholder="Website"
                  value={formData.provider2Website}
                  onChange={(e) => handleInputChange('provider2Website', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Provider 3</label>
                <input
                  type="url"
                  placeholder="Website"
                  value={formData.provider3Website}
                  onChange={(e) => handleInputChange('provider3Website', e.target.value)}
                />
              </div>
            </div>
            </div>

            <div className="final-notice">
              <h4>**PLEASE READ BEFORE SUBMITTING **</h4>
              <div className='notes'>
               <p>
                Incomplete submissions—including missing references—will not receive a response and will be automatically discarded. 
                Providing false or partial information will result in an immediate block.
              </p>
              <p>
                First impressions matter, and this is yours, please make it count. Thank you in advance to those who follow the guidelines. 
                I look forward to the opportunity of connecting with you!
              </p>

                 <button type="button" onClick={handleSubmit} className="btn-primary reserve-button">
              RESERVE NOW
            </button>
          
              </div>

            
         
             
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="navigation-buttons">
          {currentStep > 1 && (
            <button type="button" onClick={handlePrevious} className="btn-secondary">
              Previous
            </button>
          )}


          {currentStep < 3 && (
            <button type="button" onClick={handleNext} className="btn-primary ">
              Next
            </button>
          ) }
        </div>
      </div>
    </div>
  );
};

export default BookingForm;