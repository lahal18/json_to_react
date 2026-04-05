import React, { useState } from 'react';

export interface CheckoutButtonProps {
  paymentUrl?: string;
  amount?: string;
  buttonText?: string;
  className?: string;
}

export const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  paymentUrl = "https://buy.stripe.com/test_dummy_link", // Drop a real Stripe link here later!
  amount = "$99.00",
  buttonText = "Buy Now",
  className = "",
}) => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = () => {
    setLoading(true);
    
    // Simulate API connection to payment gateway
    setTimeout(() => {
      if (paymentUrl.includes('test_dummy_link')) {
        alert(`Test Mode: In a real app, this would redirect you to a secure checkout for ${amount}!`);
        setLoading(false);
      } else {
        // Redirect to actual payment link (like Stripe)
        window.location.href = paymentUrl;
      }
    }, 1000);
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={loading}
      className={`
        flex items-center justify-center gap-2 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg
        hover:bg-indigo-700 transition-colors shadow-md disabled:opacity-75
        ${className}
      `}
    >
      {loading ? (
        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )}
      {buttonText} {amount && `- ${amount}`}
    </button>
  );
};
export default CheckoutButton;