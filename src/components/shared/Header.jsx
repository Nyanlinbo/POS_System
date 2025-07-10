import { Bell, ChefHat, LockKeyhole, Search } from "lucide-react";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#000000]">
      <div className="flex items-center gap-2">
        {/* <ChefHat color="#ffffff" className="h-8 w-8" /> */}
        <img src={logo} alt="restro logo" className="h-8 w-8" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[15px] px-5 py-2 w-[500px]">
        <Search color="#ffffff" />
        <input
          type="text"
          placeholder="Search for food, drinks, etc."
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5] w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer">
          <Bell color="#ffffff" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <LockKeyhole color="#ffffff" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">Richard</h1>
            <p className="text-xs text-[#ababab] font-semibold">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
