import React, { useEffect } from "react";

const RazorpayButton = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/payment-button.js";
    script.setAttribute("data-payment_button_id", "pl_RCD4owflP5olR9"); // your ID
    script.async = true;

    const form = document.getElementById("razorpay-form");
    if (form) {
      form.innerHTML = ""; // clear old script
      form.appendChild(script);
    }
  }, []);

  return (
    <form id="razorpay-form" className="inline-block"></form>
  );
};

export default RazorpayButton;