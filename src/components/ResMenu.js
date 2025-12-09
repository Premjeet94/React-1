import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Shimmer } from "./Shimmer";

export const ResMenu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [menu, setMenu] = useState(null);
  const URL = "https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.65420&lng=77.23730&restaurantId=";
  const handler = "&submitAction=ENTER";

  const fetchData = async () => {
    const data = await fetch(URL+resId+handler);
    const json = await data.json();
    setMenu(json);
    console.log(json);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (menu === null) return <Shimmer />;

  return (
    <div className="flex flex-col mt-10 w-full max-w-7xl bg-yellow-500 rounded-3xl overflow-y-auto px-10 py-4 items-center">
      <div className="flex items-start w-full mt-4">
        <h1 className="text-4xl font-bold">
          {menu?.data?.cards[0]?.card?.card?.text}
        </h1>
      </div>
      <div className="flex text-lg font-medium gap-1 items-start px-10 h-[150px] justify-center bg-gray-100 rounded-2xl flex-col w-full mt-4">
        <h1>{menu?.data?.cards[2]?.card?.card?.info?.totalRatingsString}</h1>
        <h1>{menu?.data?.cards[2]?.card?.card?.info?.costForTwoMessage}</h1>
        <h1>{menu?.data?.cards[2]?.card?.card?.info?.cuisines}</h1>
        <h1>Outlet -{menu?.data?.cards[2]?.card?.card?.info?.slugs?.city}</h1>
        <h1>
          Will be Delivered in {menu?.data?.cards[2]?.card?.card?.info?.sla?.slaString}
        </h1>
      </div>
      <div className="flex text-3xl font-bold justify-center w-full mt-4">
        <h1>Top Picks</h1>
      </div>

      {menu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards?.map(
        (res, index) => {
          const Img_url =
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/";
          return (
            <div
              className="flex justify-between px-10 h-[100px] font-bold text-sm items-center bg-white rounded-2xl w-full mt-4"
              key={index}
            >
              <div className="gap-1 flex flex-col">
                <h1>{res?.card?.info?.name}</h1>
                <h1>Rs {res?.card?.info?.defaultPrice / 100}</h1>
                <h1>{res?.card?.info?.ratings?.aggregatedRating?.rating}</h1>
                <p>{res?.card?.info?.description}</p>
              </div>
              <div className="w-[100px] h-[80px]">
                <img
                  className="object-cover w-full h-full rounded-xl"
                  src={Img_url + res?.card?.info?.imageId}
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};
