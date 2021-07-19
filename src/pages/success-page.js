import React, {useEffect} from 'react'
import { useShoppingCart } from "use-shopping-cart"


export default function SuccessPage() {
    const {clearCart} = useShoppingCart();
    useEffect(()=>{
        clearCart();
    },[])
    return (
        <div>
            <h1 style={{margin:"0 auto"}}>Payment Successful! Thank You :)</h1>
        </div>
    )
}
