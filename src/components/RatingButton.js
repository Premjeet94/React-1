export const RatingButton = () => {
  const AboveFourStar = (props) => {
    setListOfRestaurants(
      listOfRestaurants.filter((res) => props.res.info.avgRating > 4)
    );
  };

  return (
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
  );
};
