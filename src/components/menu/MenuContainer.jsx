import { CircleCheck, ShoppingCart } from "lucide-react";
import { menus } from "../../constants";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemid] = useState();

  const increment = (id) => {
    setItemid(id);
    if (itemCount >= 4) return;
    setItemCount((c) => c + 1);
  };

  const decrement = (id) => {
    setItemid(id);
    if (itemCount <= 0) return;
    setItemCount((c) => c - 1);
  };

  return (
    <>
      <motion.div
        className="grid grid-cols-4 gap-4 px-10 py-4 w-full"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {menus.map((menu) => (
          <motion.div
            key={menu.id}
            className="flex flex-col items-start justify-between p-4 rounded-lg h-[100px] cursor-pointer"
            style={{ backgroundColor: menu.bgColor }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
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
          </motion.div>
        ))}
      </motion.div>

      <hr className="border-[#2a2a2a] border-t-2 mt-4" />

      <motion.div
        className="grid grid-cols-4 gap-4 px-10 py-4 w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <AnimatePresence>
          {selected?.items.map((menu) => (
            <motion.div
              key={menu.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-start justify-between p-4 rounded-lg h-[150px] cursor-pointer hover:bg-[#2a2a2a] bg-[#1a1a1a]"
            >
              <div className="flex items-start justify-between w-full">
                <h1 className="text-[#f5f5f5] text-lg font-semibold tracking-wide">
                  {menu.name}
                </h1>
                <button className="bg-[#2e4a40] text-[#02ca3a] p-2 rounded-lg">
                  <ShoppingCart />
                </button>
              </div>

              <div className="flex items-center justify-between w-full">
                <p className="text-[#f5f5f5] text-xl font-bold">
                  {menu.price} Kyats
                </p>

                <motion.div
                  className="flex items-center justify-between bg-[#2c2c2c] rounded-lg py-3 px-4 gap-6"
                  layout
                >
                  <button
                    onClick={() => decrement(menu.id)}
                    className="text-yellow-500 text-2xl"
                    whiletap={{ scale: 0.95 }}
                  >
                    &minus;
                  </button>
                  <motion.span
                    key={itemId === menu.id ? itemCount : "0"}
                    className="text-white"
                    animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1] }}
                    transition={{ duration: 0.3 }}
                  >
                    {menu.id === itemId ? itemCount : "0"}
                  </motion.span>
                  <button
                    onClick={() => increment(menu.id)}
                    className="text-yellow-500 text-2xl"
                  >
                    &#43;
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default MenuContainer;
