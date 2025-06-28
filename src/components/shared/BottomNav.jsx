import { Ellipsis, HandPlatter, House, Logs, Soup } from "lucide-react";
import { use } from "react";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {

  const navigate = useNavigate();


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
      <button className="absolute bg-[#F6B100] bottom-6 text-[#f5f5f5] rounded-full p-3 items-center">
        <Soup color="#ffffff" size={30} />
      </button>
    </div>
  );
};

export default BottomNav;
