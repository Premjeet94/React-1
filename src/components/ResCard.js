import { IMG_URL } from "../utils/constants";

export const ResCard = ({ res }) => {
  const { name, cuisines, costForTwo, locality, cloudinaryImageId, avgRating } =
    res?.info;
  const { lastMileTravel, deliveryTime } = res?.info?.sla;
  return (
    <div className="hover:cursor-pointer shrink-0 w-[220px] hover:shadow-2xl h-full rounded-2xl flex flex-col gap-3 hover:scale-95 px-4 py-4">
      <div className="w-full h-full">
        <img
          className="object-cover w-full h-full rounded-xl"
          src={IMG_URL + cloudinaryImageId}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-bold  text-sm">{name}</h3>
          <div className="bg-[#267E3E] rounded text-center w-12 flex justify-center items-center text-white">
            {avgRating}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="12"
              height="12"
              fill="currentColor"
            >
              <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z"></path>
            </svg>
          </div>
        </div>
        <div className="flex justify-between text-gray-600">
          <p className=" overflow-hidden h-7 w-1/2">{cuisines.join(", ")}</p>
          <p>{costForTwo}</p>
        </div>
        <p className="text-gray-400 w-full">{locality}</p>
        <div className="flex justify-between">
          <h5 className="text-red-500">Opens at 12noon</h5>
          <p>{deliveryTime} mins</p>
          <p>{lastMileTravel} km</p>
        </div>
      </div>
    </div>
  );
};

export const withPromoted = (ResCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute m-4 p-4 text-lg bg-black text-white">
         promoted
        </label>
        <ResCard {...props} />
      </div>
    );
  };
};
