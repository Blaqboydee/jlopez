import React, {useState} from 'react'
import emailjs from 'emailjs-com';


export const useForm = () => {
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

const validateForm = (data) => {
  const errors = {};

  // Step 1 - Personal Info
  if (!data.firstName.trim()) errors.firstName = "First name is required";
  if (!data.lastName.trim()) errors.lastName = "Last name is required";
  if (!data.phone.trim()) errors.phone = "Phone number is required";
  if (!/\S+@\S+\.\S+/.test(data.email)) errors.email = "Invalid email";
  if (!data.cityState.trim()) errors.cityState = "City/State is required";
  if (!data.ageBracket) errors.ageBracket = "Age bracket is required";
  if (!data.briefDescription.trim()) errors.briefDescription = "Brief description is required";
  if (!data.howDidYouFind.trim()) errors.howDidYouFind = "This field is required";

  // Step 2 - Experience Details
  if (!data.date.trim()) errors.date = "Date is required";
  if (!data.time.trim()) errors.time = "Time is required";
  if (!data.hour.trim()) errors.hour = "Hour is required";
  if (!data.minutes.trim()) errors.minutes = "Minutes are required";
  if (!data.duration.trim()) errors.duration = "Duration is required";
  if (!data.meetingLocation.trim()) errors.meetingLocation = "Meeting location is required";
  if (!data.experienceType.trim()) errors.experienceType = "Experience type is required";

  // Step 3 - References
  if (!data.affiliation.trim()) errors.affiliation = "Affiliation is required";
  if (!data.referenceDetails.trim()) errors.referenceDetails = "Reference details are required";

  return errors;
};

const handleSubmit = (e) => {
  e.preventDefault();

  const errors = validateForm(formData);
  if (Object.keys(errors).length > 0) {
    alert("Please fix errors:\n" + Object.values(errors).join('\n'));
    return;
  }

  emailjs.send('service_aatvonq', 'template_hrjfosc', formData, 'xkDMiHDWakrKEC2qp')
    .then((result) => {
      console.log('Email successfully sent!', result.text);
      alert('Reservation submitted and email sent!');
    }, (error) => {
      console.error('Failed to send email:', error.text);
      alert('Form submitted, but failed to send email.');
    });
};

















  return {
    currentStep, 
    setCurrentStep,
    formData, 
    setFormData,
    handleInputChange,
    handleNext,
    handlePrevious,
    handleSubmit
  }
}

