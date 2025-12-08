import { ResCard } from "./ResCard";

import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

export const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [FilteredRest, setFilteredRest] = useState([]);
  const [searchText, setSearchText] = useState("");

  const AboveFourStar = () => {
    setListOfRestaurants(
      listOfRestaurants.filter((res) => res.info.avgRating > 4)
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=28.65420&lng=77.23730&carousel=true&third_party_vendor=1"
    );
    const json = await data.json();
    console.log(json);
    setListOfRestaurants(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="flex justify-center items-center">
      <div>
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
        </div>
        <div className="h-[85vh] w-[80vh] m-2 flex justify-center items-center gap-6 flex-wrap overflow-x-auto">
          {FilteredRest.map((res) => {
            return <ResCard key={res.info.id} res={res} />;
          })}
        </div>
      </div>
      <div className="w-50 h-screen flex justify-center items-start ">
        <button
          onClick={() => AboveFourStar()}
          className="bg-amber-300 h-13 font-medium text-xl rounded-md w-40 gap-1 flex items-center hover:cursor-pointer  justify-center active:scale-90"
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
  );
};
