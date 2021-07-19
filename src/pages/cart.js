import React
, {useState} 
from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';


const buttonStyles = {
    fontSize: '10px',
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
const cardStyles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    padding: '1rem',
    marginBottom: '1rem',
    boxShadow: '5px 5px 25px 0 rgba(46,61,73,.2)',
    backgroundColor: '#fff',
    borderRadius: '6px',
    maxWidth: '300px',
  };
  const conatinerStyles = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: '1rem 0 1rem 0',
  };

export default function Cart() {
    const [loading, setLoading] = useState(false)
    const {cartDetails, formattedTotalPrice, cartCount,redirectToCheckout, clearCart, incrementItem, decrementItem} = useShoppingCart()
    const data = cartDetails
    console.log(data);
    const ProductList = Object.entries(cartDetails)
    console.log(ProductList);
    return (
        <div >
        <h1>My Cart</h1>
        <a href="/">Go Back To Shop</a>
        <div style= {{display: "flex", justifyContent: "space-between" }}>
           <p> Number of Items: {cartCount}</p> 
           <p> Total: {formattedTotalPrice} </p>
            </div>
            
            <div style= {{display: "flex", justifyContent: "space-between" }}>
            <button style={buttonStyles} onClick={clearCart}>Clear Cart</button>
            <button style={buttonStyles} disabled={loading} onClick={() => {
                setLoading(true)
                redirectToCheckout()
                }}>
            {loading ? "Loading...": "Checkout"}
            </button>
            
            </div>
        <div style={conatinerStyles}>
         {ProductList.map((newSku) => (
             <div key={newSku[0]}  style={cardStyles}>
              <img src={newSku[1].image} alt={newSku[1].description} height="150px" style={{margin: "0 auto"}} />
        <h2>{newSku[1].name}</h2>
        <p>{newSku[1].description}</p>
        <p>Price: {" "}
            {formatCurrencyString({
                value: parseInt(newSku[1].price),
                currency: newSku[1].currency
            })}
        </p>
        <div >
            <button style={{height: 20, width: 20, margin: 5, textAlign: "center", border:"none"}} onClick={() => incrementItem(newSku[0])}>+ {' '}</button>
            <button style={{height: 20, width: 20, margin: 5,textAlign: "center", border:"none"}} onClick={() => decrementItem(newSku[0])}>{' '}-</button>
            </div>
         </div>
         ))}
      
    </div>
        </div>
    )
}
