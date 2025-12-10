import { ResMenuItem } from "./ResMenuItem";

export const ResMenuHeader = ({c,toggle,setshowMenu}) => {
    const toggleMenu = ()=>{
      setshowMenu()
    }

  return (

    <div>

      <div

        className="flex hover:cursor-pointer active:scale-99 justify-between mt-6 px-4 py-2 text-2xl bg-gray-200 items-center rounded-xl h-20 font-medium" onClick={()=>{
          toggleMenu()
        }} 
      >

        <span>

          {c?.card?.card?.title}({c?.card?.card?.itemCards.length})

        </span>

        <span>⬇️</span>

      </div>

      {toggle && <ResMenuItem  m={c} />}

    </div>
  );
};
