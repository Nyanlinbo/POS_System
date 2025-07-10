import { Ellipsis, HandPlatter, House, Logs, Soup } from "lucide-react";
import { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [guestCount, setGuestCount] = useState(0);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((increase) => increase + 1);
  };
  const decrement = () => {
    if (guestCount <= 0) return;
    setGuestCount((decrease) => decrease - 1);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#262626] flex justify-around p-2 h-16">
      <button
        onClick={() => navigate("/")}
        className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] flex items-center justify-center"
      >
        <House color="#ffffff" className="inline mr-2 " size={30} />
        <p>Home</p>
      </button>
      <button
        onClick={() => navigate("/orders")}
        className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] flex items-center justify-center"
      >
        <Logs color="#ffffff" className="inline mr-2 " size={30} />
        <p>Orders</p>
      </button>
      <button
        onClick={() => navigate("/tables")}
        className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] flex items-center justify-center"
      >
        <HandPlatter color="#ffffff" className="inline mr-2 " size={30} />
        <p>Tables</p>
      </button>
      <button className="text-[#f5f5f5] bg-[#343434] w-[200px] rounded-[20px] flex items-center justify-center">
        <Ellipsis color="#ffffff" className="inline mr-2 " size={30} />
        <p>More</p>
      </button>
      <button
        onClick={openModal}
        className="absolute bg-[#F6B100] bottom-6 text-[#f5f5f5] rounded-full p-3 items-center"
      >
        <Soup color="#ffffff" size={30} />
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create New Order">
        <div>
          <label className="block text-[#ababab] mb-2 text-sm font-medium">
            Customer Name
          </label>
          <div className="flex items-center bg-[#2c2c2c] rounded-lg p-3 px-4">
            <input
              type="text"
              name="  "
              placeholder="Enter Customer Name"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block text-[#ababab] mb-2 mt-3 text-sm font-medium">
            Customer Phone
          </label>
          <div className="flex items-center bg-[#2c2c2c] rounded-lg p-3 px-4">
            <input
              type="number"
              name="  "
              placeholder="+959 123 456 789"
              id=""
              className="bg-transparent flex-1 text-white focus:outline-none"
            />
          </div>
        </div>
        <div>
          <label className="block mb-2 mt-3 text-sm font-medium text-[#ababab]">
            Guest
          </label>
          <div className="flex items-center justify-between bg-[#2c2c2c] rounded-lg py-3 px-4">
            <button onClick={decrement} className="text-yellow-500 text-2xl">
              &minus;
            </button>
            <span className="text-white">{guestCount} Person</span>
            <button onClick={increment} className="text-yellow-500 text-2xl">
              &#43;
            </button>
          </div>
        </div>
        <button
          onClick={() => navigate("/tables")}
          className="w-full bg-[#F6B100] text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700"
        >
          Create Order
        </button>
      </Modal>
    </div>
  );
};

export default BottomNav;
