import React, { useState, useEffect } from "react";
import "./css/ShortCart.css"
export default function ShortCart () {
  const [cartItems, setCartItems] = useState([]);
  const [over18, set18] = useState(false);

  useEffect(() => {
    // Initial data (replace this with your actual initial data)
    const initialData = JSON.parse(localStorage.getItem("cart")) || [];
      // Add more initial data as needed
      const itemsWithQuantity = initialData.map(item => ({ ...item, qty: 1 }));
      setCartItems(itemsWithQuantity);
  }, []);

  const totalPriceShow = () => {
    const sum = cartItems.reduce((acc, elem) => {
      return acc + elem.price * elem.qty;
    }, 0);

    return sum.toFixed(2); // Assuming you want to display the total with two decimal places
  };

  const handleDelete = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };
  const handleQuantityChange = (index, newQty) => {
    if (newQty >= 0) {
      const updatedCart = [...cartItems];
      updatedCart[index].qty = newQty;
      setCartItems(updatedCart);
    }
  };
  return (
    <div id="cart-div">
      <h1>Your Order</h1>
      <p id="freeShopping">You're getting free shopping!</p>
        <p>You earn 320 points on this purchase!</p>
      <div id="display-div">
        {cartItems.map((item, index) => (
          <div key={index} style={{display:"flex", justifyContent:"space-between"}}>
            {/* Render your item details here */}
            <img src={item.img_url} alt={item.name} />
            <div style={{width:"200px"}}>

                <h4>{item.name}</h4>
                <p id="productCode">Region :{item.region}</p>
                <h4>${(item.price * item.qty).toFixed(2)}</h4>
            </div>

            {/* <p>{item.productCode}</p> */}
          </div>
        ))}
      </div>
      <div id="checkout-div">
        {/* Your checkout details */}

        {/* ... (other checkout details) */}
        <div id="total-price">
          <div id="sub-items">
            <h3>Total</h3>
            <span id="total-items">({cartItems.length} items)</span>
          </div>
          <div id="price-total">{`$${totalPriceShow()}`}</div>
        </div>
      </div>
    </div>
  );
};


