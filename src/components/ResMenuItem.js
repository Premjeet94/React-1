import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

export const ResMenuItem = ({ m }) => {

  const dispatch = useDispatch();
  const handleAddItem = (m) =>{
    dispatch(addItem(m))
  }

  return (
    <div>
      {m.card.card.itemCards.map((m) => (
        <div
          key={m?.card?.info?.id}
          className="flex justify-between items-center mt-4 border-t border-gray-200 h-40 w-full  px-4 py-2"
        >
          {" "}
          <div className="mt-4 gap-3 flex flex-col">
            <h1 className="text-2xl font-medium">{m?.card?.info?.name}</h1>
            <h2 className="text-lg font-medium">
              ₹{" "}
              {m?.card?.info?.price
                ? Math.abs(m?.card?.info?.price / 100)
                : Math.abs(m?.card?.info?.defaultPrice / 100)}
            </h2>
            <p className="text-lg w-xl truncate  ">
              {m?.card?.info?.description}
            </p>
          </div>
          <div className=" flex flex-col h-35  items-center justify-center relative w-25 ">
            <img
              className="rounded-xl object-cover h-30 w-25 "
              src={IMG_URL + m?.card?.info?.imageId}
            />
            <button className="bg-white  mt-2 h-8 w-20 text-sm hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded-lg shadow absolute  bottom-0.5 active:scale-99" onClick={()=>handleAddItem(m)}>
              Add +
            </button>
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
