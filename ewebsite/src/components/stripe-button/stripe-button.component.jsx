import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import './stripe-button.styles.scss'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishablekey = "pk_test_51L0gWISDzz5ZgxPhEu1pdpM0alBpZ2ZEktLwpIvA9eMxHyQNcV6tAVTW6OLRp4FjXulnJBo8Gv9zfXq6cJOIGzUh00LOFsetUz";
    
    //publishablekey = Stripe.setPublishableKey();

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    return(
        <StripeCheckout className='stripe'
         label = 'Pay Now'
         currency = 'INR'
         name='Auto Konnect'
         text = 'AUTO KONNECT'
         amount = {priceForStripe}
         panelLabel = 'Pay Now'
         token = {onToken}
         stripeKey = {publishablekey}

        />
    );
};

export default StripeCheckoutButton;