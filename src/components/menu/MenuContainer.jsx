import { CircleCheck, ShoppingCart } from "lucide-react";
import { menus } from "../../constants";

import { useState } from "react";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemid] = useState();

  const increment = (id) => {
    setItemid(id);
    if (itemCount >= 4) return;
    setItemCount((increase) => increase + 1);
  };
  const decrement = () => {
    setItemid(id);
    if (itemCount <= 0) return;
    setItemCount((decrease) => decrease - 1);
  };
  return (
    <>
      <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] ">
        {menus.map((menu) => {
          return (
            <div
              key={menu.id}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemid(0);
                setItemCount(0);
              }}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                  {menu.icon}
                  {menu.name}
                </h1>
                {selected.id === menu.id && (
                  <CircleCheck className="text-[#f5f5f5] w-6 h-6" size={20} />
                )}
              </div>
              <p className="text-[#ababab] text-sm font-semibold">
                {menu.items.length} Items
              </p>
            </div>
          );
        })}
      </div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />
      <div>
        <div className="grid grid-cols-4 gap-4 px-10 py-4 w-[100%] ">
          {selected?.items.map((menu) => {
            return (
              <div
                key={menu.id}
                className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
              >
                <div className="flex items-start justify-between w-full">
                  <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                    {menu.name}
                  </h1>
                  <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg">
                    {" "}
                    <ShoppingCart />
                  </button>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p className="text-[#f5f5f5] text-xl font-bold">
                    {menu.price} Kyats
                  </p>
                  <div className="flex items-center justify-between bg-[#2c2c2c] rounded-lg py-3 px-4 gap-6">
                    <button
                      onClick={() => decrement(menu.id)}
                      className="text-yellow-500 text-2xl"
                    >
                      &minus;
                    </button>
                    <span className="text-white">
                      {menu.id === itemId ? itemCount : "0"}
                    </span>
                    <button
                      onClick={() => increment(menu.id)}
                      className="text-yellow-500 text-2xl"
                    >
                      &#43;
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default MenuContainer;
