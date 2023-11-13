import React from "react";
import Card_Subscription from "./Card_Subscription";
import { Shield, Skull, Trophy, User } from "lucide-react";
const OrederMenu = [
  {
    OrderedItem: "Free",
    Icon: User,
    Btn: false,
    OrderSetion: [
      { orderTitle: "2 agents", activity: true },
      { orderTitle: "up to 100 tickets / mount", activity: true },
      { orderTitle: "Low prioroity support", activity: true },
      { orderTitle: "Onbaarding specialist", activity: false },
      { orderTitle: "Two factor outhentifition", activity: false },
    ],
  },
  {
    OrderedItem: "Pro",
    Btn: true,
    Icon: Trophy,
    OrderSetion: [
      { orderTitle: "2 agents", activity: true },
      { orderTitle: "up to 100 tickets / mount", activity: true },
      { orderTitle: "Low prioroity support", activity: true },
      { orderTitle: "Onbaarding specialist", activity: true },
      { orderTitle: "Two factor outhentifition", activity: true },
    ],
  },
  {
    OrderedItem: "Enterprise",
    Btn: true,
    Icon: Skull,
    OrderSetion: [
      { orderTitle: "2 agents", activity: true },
      { orderTitle: "up to 100 tickets / mount", activity: true },
      { orderTitle: "Low prioroity support", activity: true },
      { orderTitle: "Onbaarding specialist", activity: true },
      { orderTitle: "Two factor outhentifition", activity: true },
    ],
  },
];
function Subscription() {
  return (
    <>
      <div className=" px-20 py-4">
        <h1 className=" text-[35px] font-bold uppercase">Subscription</h1>
        <div className=" space-x-5 py-6">
          <button className=" font-semibold uppercase text-white dark:text-white py-3 px-5 bg-blue-500 rounded-md ">
            shoose plan
          </button>
          <button className=" font-semibold uppercase text-gray-300 hover:text-black duration-200 dark:text-gray-400 dark:hover:text-black py-3 px-5 bg-white rounded-md ">
            payment
          </button>
        </div>
        <div className=" w-full  gap-20 grid grid-flow-col grid-cols-3">
          {OrederMenu.map((items, index) => (
            <div key={index}>
              <Card_Subscription
                Btn={items.Btn}
                Icon={items.Icon}
                CardTitle={items.OrderedItem}
                CardDrcp={items.OrderSetion}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Subscription;
