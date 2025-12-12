import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import { IMG_URL } from "../utils/constants";
import { useState } from "react";
import { ResMenuItem } from "./ResMenuItem";
import { ResMenuHeader } from "./ResMenuHeader";

export const ResMenu = () => {
  const [showMenu, setshowMenu] = useState(null);

  const { resId } = useParams();

  const menu = useRestaurantMenu(resId);


  const filteredMenu =
    menu?.data?.cards[5]?.groupedCard?.cardGroupMap.REGULAR?.cards.filter(
      (m) =>
        m.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );


  if (menu === null) return <Shimmer />;
  return (
    <div>
      <div>
        <h1 className="text-5xl font-bold mt-6">
          {menu?.data?.cards[0]?.card?.card?.text}
        </h1>
        <div className="flex gap-4 mt-6 text-3xl font-medium bg-gray-100 px-4 py-2 rounded-xl">
          <h1>
            Total Rating -{" "}
            {menu?.data?.cards[2]?.card?.card?.info?.totalRatingsString}
          </h1>
          <h1>|</h1>
          <h1>{menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
          <h1>|</h1>
          <h1>{menu?.data?.cards[2]?.card?.card?.info?.cuisines.join(", ")}</h1>
          <h1>|</h1>
          <h1>
            Outlet - {menu?.data?.cards[2]?.card?.card?.info?.slugs?.city}
          </h1>
          <h1>|</h1>
          <h1>
            Will be Delivered in -
            {Math.floor(
              menu?.data?.cards[2]?.card?.card?.info?.sla?.deliveryTime / 60
            )}{" "}
            mins
          </h1>
        </div>

        {filteredMenu?.map((c, idx) => {
          return (
            <ResMenuHeader
              key={idx}
              c={c}
              toggle={idx === showMenu ? true : false}
              setshowMenu={() => setshowMenu(prev=>(prev===idx?null:idx))}
            />
          );
        })}
      </div>
    </div>
  );
};
