import React, { useState } from "react";
import { FaUser, FaEnvelope, FaCheckCircle } from "react-icons/fa";
import './RegistrationStepper.css';

const RegistrationStepper = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    adharNumber: "",
    gender: "",
    communicationAddressDistrict: "",
    permanentAddressDistrict: "",
    highestQualification: "",
    passoutYear: "",
    specialization: "",
    workExperience: "",
    preferedLocation: "",
    languages: "",
    password: "",
    payment: "",
  });
  const [formErrors, setFormErrors] = useState({
    email: "",
    otp: "",
    fullName: "",
    mobileNumber: "",
    gender: "",
    communicationAddressDistrict: "",
    permanentAddressDistrict: "",
    highestQualification: "",
    passoutYear: "",
    specialization: "",
    workExperience: "",
    preferedLocation: "",
    languages: "",
    password: "",
    payment: "",
  });
  const [isPermanentAddressSame, setIsPermanentAddressSame] = useState(false);

  const handleSendOtp = () => {
    if (!email) return setFormErrors(prev => ({ ...prev, email: "Please enter a valid email address." }));
    setFormErrors(prev => ({ ...prev, email: "" }));
    setIsOtpSent(true);
  };

  const handleOtpVerification = () => {
    if (otp === "1234") {
      setCurrentStep(2);
    } else {
      setFormErrors(prev => ({ ...prev, otp: "Invalid OTP. Please try again." }));
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && email) {
      handleSendOtp();
    } else if (currentStep === 2) {
      const fieldsToCheck = [
        formData.fullName,
        formData.mobileNumber,
        formData.gender,
        formData.communicationAddressDistrict,
      ];

      if (!isPermanentAddressSame) {
        fieldsToCheck.push(formData.permanentAddressDistrict);
      }

      if (fieldsToCheck.every(field => field !== "")) {
        setCurrentStep(3);
      } else {
        setFormErrors(prev => ({
          ...prev,
          fullName: formData.fullName ? "" : "Full Name is required.",
          mobileNumber: formData.mobileNumber ? "" : "Mobile Number is required.",
          gender: formData.gender ? "" : "Gender is required.",
          communicationAddressDistrict: formData.communicationAddressDistrict ? "" : "Communication Address District is required.",
          permanentAddressDistrict: !isPermanentAddressSame && !formData.permanentAddressDistrict
            ? "Permanent Address District is required."
            : "",
        }));
      }
    } else if (currentStep === 3) {
      alert("Registration Successful!");
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handlePermanentAddressToggle = () => {
    setIsPermanentAddressSame(!isPermanentAddressSame);
    if (!isPermanentAddressSame) {
      setFormData((prevState) => ({
        ...prevState,
        permanentAddressDistrict: formData.communicationAddressDistrict,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        permanentAddressDistrict: "",
      }));
    }
  };

  return (
    <div className="stepper-container">
      <div className="stepper">
        <div className={`step ${currentStep === 1 ? "active" : ""}`}>
          <FaEnvelope />
        </div>
        <div className={`step ${currentStep === 2 ? "active" : ""}`}>
          <FaUser />
        </div>
        <div className={`step ${currentStep === 3 ? "active" : ""}`}>
          <FaCheckCircle />
        </div>
      </div>

      <div className="form-container">
        {currentStep === 1 && (
          <div className="step-1">
            <h2>Step 1: Email Verification</h2>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && <div className="alert">{formErrors.email}</div>}
            <button onClick={handleSendOtp}>Send OTP</button>
            {isOtpSent && (
              <>
                <input
                  type="text"
                  name="otp"
                  placeholder="Sample OTP : 1234"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
                {formErrors.otp && <div className="alert">{formErrors.otp}</div>}
                <button onClick={handleOtpVerification}>Verify OTP</button>
              </>
            )}
          </div>
        )}

        {currentStep === 2 && (
          <div className="step-2">
            <h2>Step 2: Personal Details</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
            {formErrors.fullName && <div className="alert">{formErrors.fullName}</div>}
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
            />
            {formErrors.mobileNumber && <div className="alert">{formErrors.mobileNumber}</div>}
            
            <div className="gender-input">
              <label>Gender: </label>
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              /> Male
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              /> Female
              <input
                type="radio"
                name="gender"
                value="Other"
                checked={formData.gender === "Other"}
                onChange={handleChange}
              /> Other
              {formErrors.gender && <div className="alert">{formErrors.gender}</div>}
            </div>

            <input
              type="text"
              name="communicationAddressDistrict"
              placeholder="Communication Address District"
              value={formData.communicationAddressDistrict}
              onChange={handleChange}
            />
            {formErrors.communicationAddressDistrict && <div className="alert">{formErrors.communicationAddressDistrict}</div>}

            <input
              type="text"
              name="permanentAddressDistrict"
              placeholder="Permanent Address District"
              value={formData.permanentAddressDistrict}
              onChange={handleChange}
              disabled={isPermanentAddressSame}
            />
            {formErrors.permanentAddressDistrict && <div className="alert">{formErrors.permanentAddressDistrict}</div>}

            <div className="permanent-address-toggle">
              <label className="sameas-icon">
                <input
                  type="checkbox"
                  checked={isPermanentAddressSame}
                  onChange={handlePermanentAddressToggle}
                />
              </label>
              Same as Communication Address
            </div>

            <div className="regi-buttons">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        )}

        {currentStep === 3 && (
          <div className="step-3">
            <h2>Step 3: Additional Details</h2>
            <input
              type="text"
              name="highestQualification"
              placeholder="Highest Qualification"
              value={formData.highestQualification}
              onChange={handleChange}
            />
            <input
              type="number"
              name="passoutYear"
              placeholder="Passout Year"
              value={formData.passoutYear}
              onChange={handleChange}
            />
            <input
              type="text"
              name="specialization"
              placeholder="Specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
            <input
              type="text"
              name="workExperience"
              placeholder="Work Experience (years)"
              value={formData.workExperience}
              onChange={handleChange}
            />
            <input
              type="text"
              name="preferedLocation"
              placeholder="Preferred Location"
              value={formData.preferedLocation}
              onChange={handleChange}
            />
            <input
              type="text"
              name="languages"
              placeholder="Languages Known"
              value={formData.languages}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <input
              type="text"
              name="payment"
              placeholder="Payment Details"
              value={formData.payment}
              onChange={handleChange}
            />

            <div className="regi-buttons">
              <button onClick={handleBack}>Back</button>
              <button onClick={handleNext}>Submit</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegistrationStepper;
