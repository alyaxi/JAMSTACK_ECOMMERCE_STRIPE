import React from 'react'
import { useShoppingCart, formatCurrencyString } from 'use-shopping-cart';

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
export default function SkuCard({newSku}) {
    console.log("newSku Var"+ JSON.stringify(newSku));
    const {addItem} = useShoppingCart()
    return (
        <div style={cardStyles}>
            <img src={newSku.image} alt={newSku.description} height="150px" style={{margin: "0 auto"}} />
            <h2>{newSku.name}</h2>
            <p>{newSku.description}</p>
            <p>Price: {" "}
                {formatCurrencyString({
                    value: parseInt(newSku.price),
                    currency: newSku.currency
                })}
            </p>
            <button style={buttonStyles} onClick={() => addItem(newSku)}>Add to Cart</button>
        </div>
    )
}
