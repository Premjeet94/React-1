import { IMG_URL } from "../utils/constants";

export const ResMenuItem = ({ m }) => {
  console.log(m);
  return (
    <div>
      {m.card.card.itemCards.map((m) => (
        <div
          key={m?.card?.info?.id}
          className="flex justify-between items-center mt-4 border-t border-gray-200 px-4 py-2"
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
          <div className="w-20 h-full ">
            <img
              className="rounded-xl object-cover"
              src={IMG_URL + m?.card?.info?.imageId}
            />
          </div>
        </div>
      ))}
      ;
    </div>
  );
};
