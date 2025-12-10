import { useEffect, useState } from "react";
import { CARD_URL } from "./constants.js";

export const useRestaurantData = () => {
  const [jsonData, setjsonData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(CARD_URL);
    const json = await data.json();
    const resList =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setjsonData(resList);
  };

  return jsonData;
};
