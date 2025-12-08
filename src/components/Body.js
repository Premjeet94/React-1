import { ResCard } from "./ResCard";

import { resList } from "../utils/mockData";
import { useState } from "react";



export const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    const AboveFiveStar = ()=>{
        setListOfRestaurants(listOfRestaurants.filter((res) =>res.data.avgRating > 4));


    }
  return (
    <div className="flex justify-center items-center">
      <div>
        <div className="flex gap-5 justify-center h-10 w-full">
          <input
            placeholder="Search Your Favourite Restaurant"
            className="w-80 outline-0 border font-medium rounded px-6 py-2"
          ></input>
          <button className="bg-amber-300 w-30 rounded active:scale-90 hover:cursor-pointer">
            Search
          </button>
        </div>
        <div className="h-[85vh] w-[80vh] m-2 flex justify-center items-center gap-6 flex-wrap overflow-x-auto">
          {listOfRestaurants.map((res) => {
            return <ResCard key={res.data.id} res={res} />;
          })}
        </div>
      </div>
      <div className="w-50 h-screen flex justify-center items-start ">
        <button onClick={AboveFiveStar} className="bg-amber-300 h-13 font-medium text-xl rounded-md w-40 gap-1 flex items-center hover:cursor-pointer  justify-center active:scale-90">
          Above 5
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
