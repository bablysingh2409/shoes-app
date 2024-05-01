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
      <div className="w-full flex overflow-x-scroll gap-2 items-center mt-2 hide-scrollbar ">
        {data.map((item, i) => {
          return (
            <div key={i} className="flex justify-center items-center flex-col shadow-lg p-4 ">
              <div className="w-[200px] flex justify-center items-center">
                <img src="/newArrivalShoe.png" alt="shoe" 
                    className="w-[70%] "
                />
              </div>
              <div className="w-[150px] flex justify-center items-center flex-col py-2 ">
                <p className="uppercase text-xl font-semibold">{item.name}</p>
                <p className="text-sm font-semibold text-gray-600">{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NewArrival;
