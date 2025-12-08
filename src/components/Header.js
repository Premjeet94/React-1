import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  return (
    <div className="head-container w-full h-[15vh] items-center border m-2 px-20 flex justify-between">
      <div className="logo-container w-30 h-30">
        <img
          alt="logo"
          src={LOGO_URL}
        />
      </div>
      <div className="null">
        <ul className="flex gap-20 text-lg font-medium">
          <li>Home</li>
          <li>AboutUs</li>
          <li>Contact</li>
          <li>Profile</li>
        </ul>
      </div>
    </div>
  );
};
