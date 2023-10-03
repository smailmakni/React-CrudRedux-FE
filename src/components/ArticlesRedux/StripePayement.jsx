import '../../App.css';
import StripeCheckout from 'react-stripe-checkout';
import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate,useParams } from "react-router-dom";
const MySwal = withReactContent(Swal);
function StripePayment() {
let navigate=useNavigate();
const {total} = useParams();
const publishableKey =
'pk_test_51NnLo2BWSbXcct2rJgkllJuh1VAm24hXEaDZtLyh4AHKLgM4Rm6D9TYS5Q6HRFjhxcVhervSfSYnH8WgWRGCugVm00J9M1Y9JF';
const [product] = useState({
name: 'Total',
price: `${total}`,
});
const priceForStripe = product.price * 100;
const handleSuccess = () => {
MySwal.fire({
icon: 'success',
title: 'Payment was successful',
time: 6000,
});
window.location = "/";
};
const handleFailure = () => {
MySwal.fire({
icon: 'error',
title: 'Payment was not successful',
time: 4000,
});
navigate('/')
};
const payNow = async (token) => { console.log(JSON.stringify(token))
try {
const response = await axios({
//url: 'https://ecommercebackend2023j.vercel.app/api/payment',
url: 'http://localhost:5000/api/payement',
method: 'post',
data: {
amount: product.price * 100,
token,
},
});
if (response.status === 200) {
handleSuccess();
}
} catch (error) {
handleFailure();
console.log(error);
}
};
return (
<div className="home-container">
<div className="products">
<div className="product">
<h2>Complete payment </h2>
<p>
{product.name}
</p>
<p>
{product.price} TND
</p>
<StripeCheckout
stripeKey={publishableKey}
label="Pay Now"
name="Pay With Credit Card"
billingAddress
shippingAddress
amount={priceForStripe}
description={`Your total is ${product.price} TND`}
token={payNow}
/>
</div>
</div>
</div>
);
}
export default StripePayment;