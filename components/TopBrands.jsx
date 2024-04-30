import React from "react";
import { SiNike } from "react-icons/si";
import { CgAdidas } from "react-icons/cg";
import { SiReebok } from "react-icons/si";
import { SiPuma } from "react-icons/si";
import { SiBata } from "react-icons/si";

const data = [
  { name: "Nike", logo: <SiNike /> },
  { name: "Adidas", logo: <CgAdidas /> },
  { name: "Reebok", logo: <SiReebok /> },
  { name: "Puma", logo: <SiPuma /> },
  { name: "Bata", logo: <SiBata /> },
];

function TopBrands() {
  return (
    <div className="mt-6">
    <h1 className="px-2 py-1 text-2xl font-semibold">Top Brands</h1>
      <div className=" p-2 flex justify-between items-center gap-2">
        {data.map((brand,i) => {
          return (
            <div key={i} className="flex flex-col justify-center items-center">
              <div className="w-full border-2 border-gray-500 rounded-full p-3 text-4xl">{brand.logo}</div>
              <p className="text-xl font-semibold">{brand.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopBrands;
