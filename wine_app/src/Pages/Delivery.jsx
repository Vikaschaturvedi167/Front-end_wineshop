import React, { useState, useEffect } from "react";
import "../Pages/css/Delivery.css"
import ShortCart from "./ShortCart";
import { useNavigate } from "react-router-dom";

export default function Delivery() {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      emailAddress: '',
      optionalMessage: '',
    });

    const navigate =  useNavigate();
  
    const handleInputChange = (e) => {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/Payment')
    };
  
    // Placeholder for product data
    const productData = [
      {
        name: 'Château Margaux',
        year: 2019,
        price: 2000,
        url: 'https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/34/2017/11/margaux-2015-limited-release.jpg',
      },
      // Add more products as needed
    ];
  
    return (
      <div id="info">
        <div id="leftD">
          <div>
            <h1>Checkout</h1>
          </div>
          <div id="topLeft">
            <h3 style={{}}>1. Information</h3>
            <i className="fa-solid fa-arrow-right-long"></i>
            <h3 style={{ borderBottom: '2px solid #bf0d12', paddingBottom: '10px' }} >2. Delivery</h3>
            <i className="fa-solid fa-arrow-right-long" style={{ color: 'cadetblue' }}></i>
            <h3 style={{color:"#bfbbb2"}}>3. Payment method</h3>
          </div>
          <div id="details">
            <form onSubmit={handleSubmit}>
              <div id="fullName">
                <div id="fName">
                  <label htmlFor="firstName">Pin Code</label><br />
                  <input type="text" id="firstName" placeholder="Enter Your city pin code" onChange={handleInputChange} />
                </div>
                <div id="lName">
                  <label htmlFor="lastName">State</label><br />
                  <input type="text" id="lastName" placeholder="Enter Your State" onChange={handleInputChange} />
                </div>
              </div>
              <label htmlFor="number">Full Address</label><br />
              <input type="text" id="number" placeholder="Enter Full Address" onChange={handleInputChange} /><br />
              <label >Lamdmark</label><br />
              <input type="text" placeholder="Enter Lamdmark" id="" onChange={handleInputChange} /><br />
              <label htmlFor="optionalMessage">Any message (optional)</label><br />
              <input type="text" id="optionalMessage" onChange={handleInputChange} />
              <button type="submit" id="submit" >Continue</button>
            </form>
          </div>
        </div>
        <div >
        <ShortCart/>
        </div>
      </div>
    );
  };
