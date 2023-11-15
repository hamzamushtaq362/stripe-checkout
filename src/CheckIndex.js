import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51N1AutHuxpzHHYJqtwb7knLPjayLBzCooOZOjP4i0o0EPqtIfEklsYGgw9dexwfnsKaXLmDWUTsARLset6zO0kwI00R9ryGhU2');

export default function CheckIndex() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};