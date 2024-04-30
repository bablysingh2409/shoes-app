import React from "react";

const data = [
  { name: "shoe1", price: "₹2000" },
  { name: "shoe1", price: "₹2000" },
  { name: "shoe1", price: "₹2000" },
  { name: "shoe1", price: "₹2000" },
  { name: "shoe1", price: "₹2000" },
  { name: "shoe1", price: "₹2000" },
];

function NewArrival() {
  return (
    <div className="mt-6 overflow-x-auto whitespace-nowrap hide-scrollbar">
      <h1 className="px-2 py-1 text-2xl font-semibold">New Arrivals</h1>
      <div className="w-full flex overflow-x-scroll gap-2 items-center mt-2 hide-scrollbar">
        {data.map((item, i) => {
          return (
            <div key={i} className="flex justify-center items-end flex-col">
              <div className="">
                <img src="/newArrivalShoe.png" alt="shoe" />
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrival;
