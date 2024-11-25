"use client";
import Checkout from "../components/Checkout";
import Quantity from "../components/Quantity";
import convertToSubcurrency from "../lib/converToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

if (process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY);

export default function PayPage({ children, productPrice }) {
  const cost = Number(productPrice);
  console.log(cost);

  const [counter, setCounter] = useState(1);
  const [totalAmount, setTotalAmount] = useState(cost);

  useEffect(() => {
    const newCost = cost * counter;
    const formattedAmount = parseFloat(
      (Math.round((newCost + Number.EPSILON) * 100) / 100).toFixed(2),
    );
    setTotalAmount(formattedAmount);
  }, [counter, cost]);

  return (
    <section className="flex flex-col items-center justify-center py-24 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:space-x-6">
        <div className="flex flex-col justify-center items-center lg:h-[34rem]">
          {children}
          <div className="pb-4 lg:pb-0">
            <Quantity counter={counter} setCounter={setCounter} />
          </div>
        </div>
        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(totalAmount),
            currency: "usd",
          }}
        >
          <Checkout amount={totalAmount} />
        </Elements>
      </div>
    </section>
  );
}
