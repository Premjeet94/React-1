import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { ResMenuItem } from "./ResMenuItem";
import { IMG_URL } from "../utils/constants";
export const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="h-[57vh] max-w-7xl flex flex-col w-screen">
      <h1 className="text-5xl mt-6 text-center h-20 font-bold"> Cart</h1>
      <div className="flex flex-col h-full bg-gray-50 justify-center items-center gap-4 ">
        {cartItems.length === 0 && (
          <h3 className="mt-6 mb-20 text-2xl font-bold text-center">
            Your Cart is Empty,
            <br /> Add items to the cart 🛒
          </h3>
        )}
        {cartItems.length === 0 && (
          <Link to="/">
            {" "}
            <button className="bg-white  m-2 h-20 w-60 text-sm hover:bg-gray-100 text-gray-800 font-bold py-2 px-4 border border-gray-400 rounded-lg shadow  bottom-0.5 active:scale-99">
              Order Here...
            </button>
          </Link>
        )}
        <div>
          <div>
            {cartItems.map((c) => (
              <div
                key={c?.card?.info?.id}
                className="flex justify-between items-center mt-4 border-t border-gray-200 h-40 w-full  px-4 py-2"
              >
                {" "}
                <div className="mt-4 gap-3 flex flex-col">
                  <h1 className="text-2xl font-medium">
                    {c?.card?.info?.name}
                  </h1>
                  <h2 className="text-lg font-medium">
                    ₹{" "}
                    {c?.card?.info?.price
                      ? Math.abs(c?.card?.info?.price / 100)
                      : Math.abs(c?.card?.info?.defaultPrice / 100)}
                  </h2>
                  <p className="text-lg w-xl truncate  ">
                    {c?.card?.info?.description}
                  </p>
                </div>
                <div className=" flex flex-col h-35  items-center justify-center relative w-25 ">
                  <img
                    className="rounded-xl object-cover h-30 w-25 "
                    src={IMG_URL + c?.card?.info?.imageId}
                  />
                </div>
              </div>
            ))}
            <h1>Total - {}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};
