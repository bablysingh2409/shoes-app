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
    <div className="mt-8 py-6">
      <h1 className="flex justify-center items-center gap-2 text-[14px] font-semibold uppercase">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="2"
          viewBox="0 0 50 2"
          fill="none"
        >
          <path
            d="M0.601562 1.09375H49.0254"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
        Top Brands
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="2"
          viewBox="0 0 50 2"
          fill="none"
        >
          <path
            d="M0.601562 1.09375H49.0254"
            stroke="black"
            stroke-linecap="round"
          />
        </svg>
      </h1>
      <div className="flex justify-between items-center sm:w-[60%] w-[100%] sm:m-auto py-5 px-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="16"
          viewBox="0 0 29 16"
          fill="none"
        >
          <path
            d="M0.904221 7.17571C0.513697 7.56623 0.513697 8.1994 0.904221 8.58992L7.26818 14.9539C7.65871 15.3444 8.29187 15.3444 8.6824 14.9539C9.07292 14.5634 9.07292 13.9302 8.6824 13.5397L3.02554 7.88281L8.6824 2.22596C9.07292 1.83543 9.07292 1.20227 8.6824 0.811745C8.29187 0.42122 7.65871 0.42122 7.26818 0.811745L0.904221 7.17571ZM28.4463 6.88281H1.61133V8.88281H28.4463V6.88281Z"
            fill="#969090"
          />
        </svg>
        {data.map((brand, i) => {
          return (
            <div key={i} className="flex flex-col justify-center items-center ">
              <div className="sm:w-[83.054px] sm:h-[83.054px] border-2 border-gray-500 rounded-full p-3 text-4xl bg-gray-300 flex items-center justify-center w-full">
                {brand.logo}
              </div>
              <p className="text-sm font-semibold">{brand.name}</p>
            </div>
          );
        })}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="16"
          viewBox="0 0 29 16"
          fill="none"
        >
          <path
            d="M28.0274 7.17571C28.4179 7.56623 28.4179 8.1994 28.0274 8.58992L21.6635 14.9539C21.2729 15.3444 20.6398 15.3444 20.2492 14.9539C19.8587 14.5634 19.8587 13.9302 20.2492 13.5397L25.9061 7.88281L20.2492 2.22596C19.8587 1.83543 19.8587 1.20227 20.2492 0.811745C20.6398 0.42122 21.2729 0.42122 21.6635 0.811745L28.0274 7.17571ZM0.485352 6.88281H27.3203V8.88281H0.485352V6.88281Z"
            fill="#969090"
          />
        </svg>
      </div>
    </div>
  );
}

export default TopBrands;
