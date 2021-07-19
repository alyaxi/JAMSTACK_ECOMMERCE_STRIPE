import { navigate } from 'gatsby';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';


const buttonStyles = {
    fontSize: '13px',
    textAlign: 'center',
    color: '#fff',
    outline: 'none',
    padding: '12px',
    boxShadow: '2px 5px 10px rgba(0,0,0,.1)',
    backgroundColor: '#141E61',
    borderRadius: '6px',
    letterSpacing: '1.5px',
    cursor: "pointer",
    border: "none"

    
  };
export default function CardOverview() {
    
    const {
        formattedTotalPrice,
        cartCount,
        clearCart } = useShoppingCart()
    return (
        <div>
            <div style= {{display: "flex", justifyContent: "space-between" }}>
           <p> Number of Items: {cartCount}</p> 
           <p> Total: {formattedTotalPrice} </p>
            </div>
            <div style= {{display: "flex", justifyContent: "space-between" }}>
            <button style={buttonStyles} onClick={clearCart}>Clear Cart</button>
            <button style={buttonStyles} onClick={() => navigate("/cart")}>
            My Cart
            </button>
            
            </div>
        </div>
    )
}

