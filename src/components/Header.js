import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router";

export const Header = () => {

    const [button, setButton] = useState('Login')
  return (
    <div className="head-container w-full h-[15vh] items-center border m-2 p-30 flex justify-between">
      <div className="logo-container w-30 h-30">
        <img alt="logo" src={LOGO_URL} />
      </div>
      <div className="null">
        <ul className="flex gap-20 text-lg font-medium">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">AboutUs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <button
            className="bg-amber-400 rounded p-2 w-30 active:scale-95 hover:cursor-pointer"
            onClick={() => {
              button === "LogIn" ? setButton("LogOut") : setButton("LogIn");
            }}
          >
            {button}
          </button>
        </ul>
      </div>
    </div>
  );
};
