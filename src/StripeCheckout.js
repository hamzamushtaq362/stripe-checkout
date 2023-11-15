import React from 'react'
import StripeCheckout from 'react-stripe-checkout';

const TakeMoney = () => {
    const onToken = (token) => {
        fetch('/save-stripe-token', {
          method: 'POST',
          body: JSON.stringify(token),
        }).then(response => {
          response.json().then(data => {
            console.log(`We are in business, ${data.email}`);
          });
        });
      }

  return (
      <StripeCheckout
          name="Three Comma Co."
          description="Big Data Stuff" // the pop-in header subtitle
          image="https://kinsta.com/wp-content/uploads/2017/01/stripe-for-wordpress.png"
          token={onToken}
          stripeKey="pk_test_51N1AutHuxpzHHYJqtwb7knLPjayLBzCooOZOjP4i0o0EPqtIfEklsYGgw9dexwfnsKaXLmDWUTsARLset6zO0kwI00R9ryGhU2"
          currency="USD"
      />
  )
}

export default TakeMoney
