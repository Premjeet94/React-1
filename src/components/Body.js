import { ResCard, withPromoted } from "./ResCard";
import { useRestaurantData } from "../utils/useRestaurantData.js";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");
  const jsonData = useRestaurantData();

  useEffect(() => {
    if (!jsonData) return;
    setListOfRestaurants(jsonData);
    setFilteredRest(jsonData);
  }, [jsonData]);

  const AboveFourStar = () => {
    setListOfRestaurants(jsonData.filter((res) => res.info.avgRating > 4));
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex items-center flex-col ">
      <h1 className="font-medium text-4xl m-10">TOP FEATURED RESTAURANT</h1>
      <div className="flex gap-5 justify-center h-10 w-full">
        <input
          placeholder="Search Your Favourite Restaurant"
          className="w-80 outline-0 border font-medium rounded px-6 py-2"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="bg-amber-300 w-30 rounded active:scale-90 hover:cursor-pointer"
          onClick={() => {
            const filteredRestaurants = listOfRestaurants.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRest(filteredRestaurants);
          }}
        >
          Search
        </button>

        <div className="w-50 flex justify-center items-start ">
          <button
            onClick={() => AboveFourStar()}
            className="bg-amber-300 h-10 font-medium text-lg rounded-md w-30 gap-1 flex items-center hover:cursor-pointer  justify-center active:scale-90"
          >
            Above 4
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        id="resCard"
        className=" overflow-x-auto w-full no-scrollbar max-w-7xl"
        onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY;
        }}
      >
        <div className="flex gap-6 mt-8 pb-4 w-max ">
          {FilteredRest.map((res) => {
            return (
              // <Link key={res?.info?.id} to={"/menu/" + res?.info?.id}>
              //   { res?.length != 0 ? (
              //     <ResCardWithPromoted res={res} />
              //   ) : (
              //     <ResCard res={res} />
              //   )}
              // </Link>
              <Link key={res?.info?.id} to={"/menu/" + res?.info?.id}>
                <ResCard res={res} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
