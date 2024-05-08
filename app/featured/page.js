"use client";
import React, { useState, useEffect } from "react";
import axiosInstance from "@/services/axiosConfig";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
// import { Base_url } from "@/constants/Links";
import { Base_url } from "@/constant/links";
// import { useUri } from "@/context/UriContext";
const uri = localStorage.getItem("uri");
// Shimmer component
function Shimmer() {
  return (
    <div className="animate-pulse flex flex-col items-center md:w-72 w-36 h-72 sm:my-5">
      <div className="w-full h-96 bg-gray-200 mb-4"></div>
      <div className="w-3/4 h-5 bg-gray-200 mb-1"></div>
      <div className="w-[30%] h-5 bg-gray-200 mb-1"></div>
    </div>
  );
}

function FilterComponent({
  item,
  initialSelectedFilters,
  onSelectFilterAndSort,
  sortItem,
  toset,
}) {
  const [filterData, setFilterData] = useState([]);
//   const { uri } = useUri();
  const [selectedFilters, setSelectedFilters] = useState(
    initialSelectedFilters
  );
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [sliderValue, setSliderValue] = useState(0); // State for slider value
  const router = useRouter();

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://api.mulltiply.com/sort-filter-values?uri=${uri}&field=${item.field}&module=SELL_OFFER&page=1&limit=10`
      );
      const data = await res.json();
      setFilterData(data?.data);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(router?.asPath?.split("?")[1]);
    const initialSelectedFilters = params.getAll(item.field);
    setSelectedFilters(initialSelectedFilters);
  }, [router]);

  const handleCheckboxChange = (value) => {
    const isValueSelected = selectedFilters.includes(value);
    let updatedFilters = [...selectedFilters];
    if (isValueSelected) {
      updatedFilters = updatedFilters.filter((filter) => filter !== value);
    } else {
      updatedFilters.push(value);
    }
    setSelectedFilters(updatedFilters);
    onSelectFilterAndSort(updatedFilters, item, sortItem);
    toset(item);
  };

  const handleSliderChange = (event) => {
    setSliderValue(event.target.value);
    onSelectFilterAndSort([event.target.value.toString()], item, sortItem);
    toset(item);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <>
      {loading ? (
        <div className="animate-pulse bg-white border-b font-book-antiqua flex flex-col items-center md:w-48 w-36 h-72 sm:my-5">
          <div className="w-full h-8 bg-gray-200 mb-2 rounded"></div>
          {/* <div className="w-3/4 h-5 bg-gray-200 mb-1 rounded"></div>
          <div className="w-[30%] h-5 bg-gray-200 mb-1 rounded"></div> */}
          <div className="flex flex-col w-full mt-4 space-y-2">
            <div className="w-full h-8 bg-gray-200 rounded"></div>
            <div className="w-full h-8 bg-gray-200 rounded"></div>
            <div className="w-full h-8 bg-gray-200 rounded"></div>
            <div className="w-full h-8 bg-gray-200 rounded"></div>
            <div className="w-full h-8 bg-gray-200 rounded"></div>
          </div>
        </div>

      ) : (
        <div>
        {item.label !== "Price" && filterData?.length > 0 && (
        <div className="relative bg-white  font-book-antiqua border-b">
          <div className="px-1 py-2">
            
              <div>
                <span className="text-black font-book-antiqua text-base font-semibold">
                  {item.label}
                </span>
                <ul className="flex flex-col">
                  {filterData.map((dataItem) => (
                    <li
                      key={dataItem}
                      className="py-1 my-0.5 cursor-pointer flex  items-center"
                    >
                      <input
                        type="checkbox"
                        value={dataItem}
                        checked={selectedFilters.includes(dataItem)}
                        onChange={() => handleCheckboxChange(dataItem)}
                        className="mr-2"
                      />
                      <span className="text-black font-book-antiqua text-sm text-left font-normal capitalize">
                        {dataItem}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            
          </div>
        </div>
      )}
      </div>
      )}
    </>
  );
}

export default function Collections() {
  const [data, setData] = useState([]);
//   const { uri } = useUri();

  const [loading, setLoading] = useState(true);
  const [filterdata, setFilterdata] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const [selectedSortOption, setSelectedSortOption] = useState("Sort By");
  const [sortByDropdownOpen, setSortByDropdownOpen] = useState(false);
  const [showFilterModal, setShowFilterModal] = useState(false);
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const router = useRouter();
  const [sortitem, setSortItem] = useState([]);
  const [filteritem, setFilteritem] = useState([]);

  const toset = (e) => {
    setFilteritem(e);
  };
  useEffect(() => {
    fetchData();
  }, [uri]);

  useEffect(() => {
    fetchSort();
    const selectedFilters = getSelectedFiltersFromUrl();
    setSelectedFilter(selectedFilters);
  }, []);

  const fetchSort = async () => {
    try {
      const uri = localStorage.getItem("uri");
      const filterresponse = await axiosInstance.get(
        `https://api.mulltiply.com/sort-filter-new?module=SELL_OFFER&uri=${uri}`
      );
      setFilterdata(filterresponse?.data?.data);
    } catch (error) {
      console.error("Error fetching sort data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const uri = localStorage.getItem("uri");
      const response = await axiosInstance.get(
        `https://api.mulltiply.com/offers/active-offers/${uri}`
      );
      setData(response?.data?.data);
      console.log(response?.data?.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onSelectFilterAndSort = async (selectedFilters, item, sortItem) => {
    try {
      const newParams = new URLSearchParams(params);

      filterdata.forEach((filterItem) => {
        if (filterItem.field !== item.field) {
          const existingFilters = newParams.getAll(filterItem.field);
          existingFilters.forEach((filter) =>
            newParams.append(filterItem.field, filter)
          );
        }
      });

      selectedFilters.forEach((filter) => newParams.append(item.field, filter));

      if (sortItem.field !== undefined) {
        newParams.set("sortBy", sortItem.field);
        newParams.set("sortDirection", sortItem.values[0]);
      }

      const selectedFilterQueryString = newParams.toString();

      router.push(`?${selectedFilterQueryString}`, undefined, {
        shallow: true,
      });

      const selectfilterresponse = await axiosInstance.get(
        `https://api.mulltiply.com/offers/active-offers-quick-order/${uri}?${selectedFilterQueryString}`
      );

      setData(selectfilterresponse?.data?.data);
      setSelectedFilter(selectedFilters);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  const getSelectedFiltersFromUrl = () => {
    const selectedFilters = [];
    filterdata.forEach((item) => {
      const values = params.getAll(item.field);
      if (values.length > 0) {
        selectedFilters.push(...values);
      }
    });
    return selectedFilters;
  };

  const toggleSortByDropdown = () => {
    setSortByDropdownOpen(!sortByDropdownOpen);
  };
  const toggleFilterByDropdown = () => {
    setShowFilterModal(!showFilterModal);
  };

  const handleSortBySelection = async (item) => {
    try {
      setLoading(true);
      await onSelectFilterAndSort(selectedFilter, filteritem, item);
      setSelectedSortOption(item.label);
      setSortItem(item);
      console.log("item", item);
      setSortByDropdownOpen(false);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching sorted data:", error);
    }
  };

  return (
    <div className="md:mt-10 md:px-10  mt-8 justify-center items-center max-w-full">
      <div className="flex sm:flex-row justify-between md:justify-between items-center mb-2 md:mb-3">
        <div className=" w-1/3">
          <div className="text-center sm:hidden display ">
            <div className="text-sm text-gray-700 ">
              <button
                className="border-2 px-4 py-1 border-solid border-black bg-white text-center font-book-antiqua text-14 text-black uppercase md:text-base text-xs mr-0 sm:mr-7"
                onClick={toggleFilterByDropdown}
              >
                Filters
              </button>
              {showFilterModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
                  <div className="bg-white p-4 rounded shadow-md">
                    <p className="text-center font-bold text-lg mb-2">
                      Filters
                    </p>
                    <div className="space-y-2">
                      {filterdata.map(
                        (item, index) =>
                          item.type === "filter" && (
                            <div className="" key={index}>
                              <FilterComponent
                                key={index}
                                item={item}
                                initialSelectedFilters={selectedFilter}
                                onSelectFilterAndSort={onSelectFilterAndSort}
                                sortItem={sortitem}
                                toset={toset}
                              />
                            </div>
                          )
                      )}
                    </div>
                    <button
                      onClick={toggleFilterByDropdown}
                      className="block w-full mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:pt-0 w-1/3 items-center sm:ml-0">
          <p className="text-center font-book-antiqua font-normal tracking-normal uppercase text-black">
            {" "}
            Collections
          </p>
        </div>
        <div className="w-1/3">
          <div className="text-center sm:text-end">
            <div className="text-sm text-gray-700 ">
              <button
                className="border-2 px-4 py-1 border-solid border-black bg-white text-center font-book-antiqua text-14 text-black uppercase md:text-base text-xs  sm:mr-7"
                onClick={toggleSortByDropdown}
              >
                {selectedSortOption}
              </button>
              {sortByDropdownOpen && (
                <div className="z-10 absolute right-4 md:right-10 mt-1  bg-white border">
                  <ul className=" text-center font-book-antiqua sm:text-14 text-black md:text-base text-xs">
                    {filterdata.map((item, index) => (
                      <div key={index}>
                        {item.type === "sort" && (
                          <li
                            className="px-4 py-2 cursor-pointer border border-solid border-black bg-white"
                            onClick={() => handleSortBySelection(item)}
                          >
                            {item.label}
                          </li>
                        )}
                      </div>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:justify-between justify-center">
        <div className="sm:block hidden w-[20%] md:min-w-[18%] py-2 md:px-2 md:mx-2 my-4 bg-white shadow-md h-[545px]">
          <p className="bg-white text-center font-book-antiqua text-14 text-black uppercase font-bold">
            filters
          </p>
          {filterdata.map(
            (item, index) =>
              item.type === "filter" && (
                <div className="" key={index}>
                  <FilterComponent
                    key={index}
                    item={item}
                    initialSelectedFilters={selectedFilter}
                    onSelectFilterAndSort={onSelectFilterAndSort}
                    sortItem={sortitem}
                    toset={toset}
                  />
                </div>
              )
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 gap-x-6 justify-center">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <Shimmer key={index} />
              ))
            : data.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center sm:my-5 my-0
                  "
                >
                  <Link
                    href={`/item/${item.attributeSet.item._id}`}
                    key={index}
                  >
                    <div className="md:h-[450px] h-72 md:w-[21rem] w-[11rem]">
                      <img
                        className="object-cover h-full w-full "
                        src={`${Base_url}${data[index]?.attributeSet.item.itemImages[0]}`}
                        alt="Image"
                      />
                    </div>
                  </Link>
                  <p className="text-new-arrival font-book-antiqua text-sm font-bold leading-tight text-center mt-1 mb-1 md:text-base capitalize">
                    {data[index]?.attributeSet.item.itemName}
                  </p>
                  {/* <p className="text-new-arrival font-book-antiqua text-sm font-bold leading-tight text-center md:text-base capitalize">
                    {data[index]?.attributeSet.item.sellerItemType}
                  </p> */}
                  <p className="text-black text-center font-book-antiqua text-sm font-bold leading-tight uppercase md:text-base">
                    ₹ {data[index]?.attributeSet.price.pricePerUnit}
                    {data[index]?.attributeSet.price.pricePerUnit !==
                      data[index]?.attributeSet.mrp.pricePerUnit && (
                      <span className="text-new-arrival text-center font-book-antiqua text-sm font-normal leading-tight line-through uppercase ml-1 md:text-base">
                        {data[index]?.attributeSet.mrp.pricePerUnit}
                      </span>
                    )}
                  </p>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
}
