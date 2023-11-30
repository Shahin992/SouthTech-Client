import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51OHt5NHWLAZjqdUwt36xAfmhLVibuB7N1Iduxtgd6ww83sMqWCOs1C5iSUvpdMnZk2ofbocTYgyzyW62qH6PTJTX00diwtoyB1');
const PaymentMethod = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentMethod;