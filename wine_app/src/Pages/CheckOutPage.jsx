import React, { useState, useEffect } from "react";
import ShortCart from './ShortCart';
import "./css/CheckOutPage.css";
import { useNavigate } from "react-router-dom";

export default function CheckOutPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    emailAddress: '',
    optionalMessage: '',
  });

  const Navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (userInfo && userInfo.email) {
      setFormData(prevData => ({
        ...prevData,
        emailAddress: userInfo.email
      }));
    }
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your existing form submission logic
  };

  return (
    <div id="info">
      <div id="leftC">
        <div>
          <h1>Checkout</h1>
        </div>
        <div id="topLeft">
          {/* ... Your step indicator code */}
        </div>
        <div id="details">
          <form onSubmit={handleSubmit}>
            {/* Your form fields */}
            <label htmlFor="email">Email address</label><br />
            <input
              type="text"
              placeholder="Enter Email Address"
              id="email"
              value={formData.emailAddress}
              onChange={handleInputChange}
            /><br />
            {/* ... Other form fields */}
            <button
              type="submit"
              id="submit"
              className="checkout"
              onClick={() => { Navigate('/Delivery') }}
            >
              Continue
            </button>
          </form>
        </div>
      </div>
      <div>
        <ShortCart/>
      </div>
    </div>
  );
};
