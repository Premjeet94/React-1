import { useEffect, useState } from "react";
import { HANDLER, MENU_URL } from "./constants";

export const useRestaurantMenu = (resId) => {
  const [menu, setmenu] = useState([]);

  useEffect(() => {fetchData()},[])

    const fetchData = async () => {
      const data = await fetch(MENU_URL + resId + HANDLER);
      const jsonData = await data.json();
      setmenu(jsonData);
    };
  return menu;
};
