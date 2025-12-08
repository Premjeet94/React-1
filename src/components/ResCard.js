


export const ResCard = ({res}) => {
    const {name,cuisines,costForTwo,slugs,lastMileTravel,cloudinaryImageId,avgRating} = res.data;
  return (
    <div className=" w-[23vh] h-[28vh] p-2 hover:cursor-pointer  hover:shadow-2xl rounded-2xl flex  flex-col gap-3">
      <div className="w-full h-60">
        <img
          className="rounded-2xl h-full object-cover"
          src={
            "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+
            cloudinaryImageId}
        />
      </div>
      <div>
        <div className="flex justify-between">
          <h3 className="font-bold text-lg">{name}</h3>
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
          <p className=" overflow-hidden">{cuisines.join(", ")}</p>
          <p>{costForTwo / 100} for two</p>
        </div>
        <p className="text-gray-400 w-10">{slugs.city}</p>
        <div className="flex justify-between">
          <h5 className="text-red-500">Opens at 12noon</h5>
          <p>{lastMileTravel} km</p>
        </div>
      </div>
    </div>
  );
};
