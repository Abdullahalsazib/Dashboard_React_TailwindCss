import { Check, User2 } from "lucide-react";
import React from "react";

function Card_Subscription(Card_Subscription_Props) {
  const OrderSetion = Card_Subscription_Props.CardDrcp;
  return (
    <>
      <div className="rounded-lg  px-6 pt-14 pb-6  bg-white">
        <div className=" flex items-center justify-center">
          <div
            className=" p-8 rounded-full bg-slate-400 flex items-center
             justify-center"
          >
            <Card_Subscription_Props.Icon size="40" />
          </div>
        </div>
        {/* Logo */}
        <div className=" text-center my-10">
          <h2 className=" text-black text-[20px]">Starter</h2>
          <h1 className=" text-black text-[35px] font-bold  uppercase">
            {Card_Subscription_Props.CardTitle}
          </h1>
        </div>
        {Card_Subscription_Props.CardDrcp.map((items, index) => (
          <div key={index} className="space-y-1 px-5 mt-10">
            <div className=" flex items-center space-x-4">
              <Check
                size="29"
                className={` ${
                  items.activity === true ? "text-black" : "text-gray-300"
                } text-blue-500`}
                strokeWidth="4"
              />
              <p
                className={`${
                  items.activity === true ? "text-black" : "text-gray-300"
                }  capitalize text-[20px]
              text-black 
            `}
              >
                {items.orderTitle}
              </p>
            </div>
          </div>
        ))}

        <button
          className={` ${
            Card_Subscription_Props.Btn === true
              ? "bg-blue-400"
              : "bg-slate-200 pointer-events-none"
          } rounded-md text-[20px] font-semibold text-white mt-5   py-3 px-5 w-full`}
        >
          Click me
        </button>
      </div>
    </>
  );
}

export default Card_Subscription;
